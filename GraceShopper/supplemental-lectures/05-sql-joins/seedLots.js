const { createActivity, createRoutine, addActivityToRoutine } = require('./db');
// const client = require('./db/client');

const seedLots = async (nExtras) => {
  const routinesToCreate = [];
  const routineActivitiesToCreate = [];
  const activitiesToCreate = [];
  for(let i=5; i<nExtras; ++i){
    routinesToCreate.push({creatorId: 2, isPublic: false, name: `Bicep Day${i}`, goal: `Work the Back and Biceps.${i}`});
    routineActivitiesToCreate.push({
      routineId: i,
      activityId: i,
      count: 10,
      duration: 5 
    });
    activitiesToCreate.push(
      { name: `wide-grip standing barbell curl${i}`, description: `Lift that barbell!${i}` }
    )

  }
  const routines = await Promise.all(routinesToCreate.map(routine => createRoutine(routine)));
  const activities = await Promise.all(activitiesToCreate.map(createActivity));
  const routineActivities = await Promise.all(routineActivitiesToCreate.map(addActivityToRoutine));
  console.log('# of extra routines created: ', routines.length);
  console.log('# of extra activities created: ', activities.length);
  console.log('# of extra routineActivities created: ', routineActivities.length);
  
  // client.end();
}

// seedLots();

module.exports = seedLots;