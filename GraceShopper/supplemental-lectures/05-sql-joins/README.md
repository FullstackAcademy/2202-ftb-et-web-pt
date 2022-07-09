# SQL - More complex joins

### 01 - SQL Joins - Presentation
- ![FSA](/logo.png) [📺 Lecture](https://www.youtube.com/watch?v=HhzhNKoIMDQ&list=PL76oDfqSFRJ_kqMnF8MePxrMeXq2e8d5Y&index=100)
- ![FSA](/logo.png) [📽 Slides](sql-joins.pdf)

### 01 - SQL Joins - Eager Loading - Demo
- ![FSA](/logo.png) [📺 Lecture](https://www.youtube.com/watch?v=30lRKy-qlOc&list=PL76oDfqSFRJ_kqMnF8MePxrMeXq2e8d5Y&index=101)
- ![FSA](/logo.png) [👾 Demo Code](routines-demo.js)

getAllRoutines (or any of the functions that attach activities) - Advantages/disadvantages of JOIN vs separate query.

If I just have 1 routine in my db, and I select just from routines, I get 1 row (expected)
```sql
SELECT name, goal
FROM routines;
```
   name    |           goal
-----------+---------------------------
 Bicep Day | Work the Back and Biceps.

But if I have 2 rows in my routine_activities table and select from just routine_activities, I get 2 rows (notice there are 2 “duplicate” routineIds… )
```sql
SELECT "routineId", count, duration
FROM routine_activities;
```
 routineId | count | duration
-----------+-------+----------
         1 |    10 |        5
         1 |    10 |        8

So now that we see we have two routine_activities, with the same routine, If we do a join, we should expect to see 2 rows, because even though there is only 1 routine, there are two routine_activities joining with the 2 routines. So if we ONLY select the data specific to routines, this looks like only duplicates.
```sql
SELECT name, goal, "routineId"
FROM routines
JOIN users ON routines."creatorId" = users.id
JOIN routine_activities ON routine_activities."routineId" = routines.id;
```
   name    |           goal            | routineId
-----------+---------------------------+-----------
 Bicep Day | Work the Back and Biceps. |         1
 Bicep Day | Work the Back and Biceps. |         1
(2 rows)


But if we select “activityId” along with it, we can see they are just duplicates of routine data, with unique activities data.
```sql
SELECT name, goal, "routineId", "activityId"
FROM routines
JOIN users ON routines."creatorId" = users.id
JOIN routine_activities ON routine_activities."routineId" = routines.id;
```
   name    |           goal            | routineId | activityId
-----------+---------------------------+-----------+------------
 Bicep Day | Work the Back and Biceps. |         1 |          1
 Bicep Day | Work the Back and Biceps. |         1 |          2

 
 To further compound the problem, this will ONLY select routines that have routine_activities associated with them.  If a routine has no routine_activities, we won't even see the routine. SO... we need to do a LEFT join:
 ```sql
SELECT routines.name AS "routineName", activities.name AS "activityName", "routineId", "activityId"
FROM routines
LEFT JOIN routine_activities ON routines.id = routine_activities."routineId"
LEFT JOIN activities ON activities.id = routine_activities."activityId";
```
 routineName |          activityName           | routineId | activityId
-------------+---------------------------------+-----------+------------
 Bicep Day   | wide-grip standing barbell curl |         1 |          1
 Bicep Day   | Incline Dumbbell Hammer Curl    |         1 |          2
 Chest Day   | bench press                     |         2 |          3
 Chest Day   | Push Ups                        |         2 |          4
 Leg Day     | squats                          |         3 |          5
 Leg Day     | treadmill                       |         3 |          6
 Leg Day     | stairs                          |         3 |          7
 Cardio Day  | treadmill                       |         4 |          6
 Cardio Day  | stairs                          |         4 |          7
 Running day |                                 |           | <!-- No activity, but we still get a routine-->
(10 rows)


But finally... we still have a problem. Doing a join to get the activities with the routines would be preferable (for efficiency), but a LOT more difficult, since we see there is a unique row for each.  We would have to loop over them multiple times to pull out each activity that is related to a routine, then attach those activities as an array to the routine.  A simpler (albeit less efficient) approach would be to
1. select all routines
2. loop over routines
   3. on each iteration, select all activities from that routine, and attach the resulting array (as a property) to the routine.

Helpful video demonstrating Left, Right, Inner, Full Outer joins  https://www.youtube.com/watch?v=2HVMiPPuPIM