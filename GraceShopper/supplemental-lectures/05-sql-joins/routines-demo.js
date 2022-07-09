const client = require('./db/client');
const util = require('util');
const { rebuildDB } = require('./db/seedData');
const { getActivitiesByRoutineId } = require('./db');
const seedLots = require('./seedLots');

// helper function
async function getRoutinesWithoutActivities(){
  try {
    // get just the routines with creatorId
    const {rows: routines} = await client.query(`
      SELECT * 
      FROM routines
      JOIN users ON users.id = routines."creatorId"
    `);
    return routines;
  } catch (error) {
    throw error
  }
}

// This type of solution is what we suggest using for now.  
// It's not the most efficient, but it will pass the tests and get the data we need
async function getAllRoutinesIterative() {
  try {
    // use getRoutinesWithoutActivities
    const routines = await getRoutinesWithoutActivities();
    // loop over routines
    for(let routine of routines) {
      const activities = await getActivitiesByRoutineId(routine.id);
      routines.activities = activities;
    }
      // getActivitiesByRoutineId for each routine
    return routines;
  } catch (error) {
    console.error(error);
  }
}

// This solution is similar to how we did it in Phenomena.  
// It's will also pass the tests and get our data.
// It's more efficient than the iterative approach, but not as good as the eager approach
async function getAllRoutinesFilter() {
  try {
    // use getRoutinesWithoutActivities
    const routines = await getRoutinesWithoutActivities();
    const {rows: activities} = await client.query(`
      SELECT *
      FROM activities 
      JOIN routine_activities ON activities.id = routine_activities."routineId"
    `)
    // loop over routines
    for(let routine of routines) {
      // filter the activities by routineId and attach to the routine as activities
      routines.activities = activities.filter(activity => routine.id === activity.routineId);
    };
    
    return routines;
  } catch (error) {
    console.error(error);
  }
}

// It is NOT NECESSARY to use reduce or joins in this way for this project.  
// This is to show the process for eager loading data
const reduceRoutineActivityPairsToRoutinesWithActivities = (routineActivityPairs) => {
  const routinesWithActivities = routineActivityPairs.reduce(
    // transform our array into usable objects using reduce.  Reduce takes 
    // 1. an aggregator (the thing we're building) - In this case, we want to build an object
    (routineAgg,
    // 2. the element of the array we're working on (like map) - In this case, a routine object
      routine) =>
    {
      // destructure all data we need from the flat routine object
      const { id, creatorId, creatorName, isPublic, routineName, goal, duration, count, activityId, activityName, description } = routine;
      // create an object of activity data from the routine
      const activity = { id: activityId, name: activityName, description, duration, count };
      
      if(!routineAgg[id]) {
        // if we've already encountered a routine with this id, we don't add the routine to the object...
        // there isn't a pre-existing routine id in this object, so 
        // we need to create a new "entry" in our object, with the key as the routine's id
        routineAgg[id] = {
          // and the data in the routine is an object with the routine's data
          id,
          creatorId,
          creatorName,
          isPublic,
          name: routineName,
          goal,
          // we add an activities array, including the activity data from above if it exists.   
          // Otherwise, we add an empty array to add future activities to
          activities: activityId ? [activity] : []
        }
      } else {
        // otherwise, there is an activityId for this row from the results...
        if(activityId) {
          // add it to the activities array
          routineAgg[id].activities.push(activity);
        }
      }
      return routineAgg
    },
    {}
  );
  
  return Object.values(routinesWithActivities);
};

async function getAllRoutinesEager() {
  try {
    // via joins, get all the data needed, but it's still in a flat array of objects.  Not what we're looking for
    const {rows: routines} = await client.query(`
      SELECT routines.id, routines."creatorId", routines."isPublic", routines.name AS "routineName", routines.goal, activities.name AS "activityName", activities.description, routine_activities."routineId", routine_activities."activityId", routine_activities.duration, routine_activities.count, users.username AS "creatorName"
      FROM routines
      JOIN users ON users.id = routines."creatorId"
      LEFT JOIN routine_activities ON routine_activities."routineId" = routines.id
      LEFT JOIN activities ON routine_activities."activityId" = activities.id
    `);

    // so we'll use our helper function to process into usable data: reduceRoutineActivityPairsToRoutinesWithActivities
    // this takes an array of flat objects and turns it into an array of objects with a property `activities`
    // this activities array holds objects of activities associated to the routine
    return reduceRoutineActivityPairsToRoutinesWithActivities(routines);
  } catch (error) {
    console.error(error);
  }
}

const run = async () => {
  try {
    client.connect();
    await rebuildDB();
    await seedLots(1000);
    console.time('iterative');
    let routines = await getAllRoutinesIterative();
    console.timeEnd('iterative');
    console.time('filter');
    routines = await getAllRoutinesFilter();
    console.timeEnd('filter');
    console.time('joinEager');
    routines = await getAllRoutinesEager();
    console.timeEnd('joinEager');
    console.log('# of routines: ', routines && routines.length);
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
  
};

run();