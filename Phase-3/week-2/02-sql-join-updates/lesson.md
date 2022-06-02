## Objectives
PosgtreSQL
## Database Adapters 
(i.e. getPuppyById) => helper functions that create a specific query

## Relations
- CREATE
    - Referencing with `REFERENCES owners(id)`
- DELETE
    - Dropping Tables in order (to avoid `error: cannot drop table owners because other objects depend on it`)
- SELECT 
    - JOIN t2 on t2.id = t1.otherTableId

## Types of Relations 
- One to One 
- Many to One 
- One to Many 
- Many to Many 
    - Join Table 

## Foreign Key
A column that is a reference to another table. Used to join

- UPDATE in sql 

```js 
 async function updateTableEntity(tableName, id, fields = {}) {
  // build the set string
  const setString = Object.keys(fields).map(
    (key, index) => `"${ key }"=$${ index + 1 }`
  ).join(', ');

  // return early if this is called without fields
  if (setString.length === 0) {
    return;
  }

  try {
    const { rows: [ trainer ] } = await client.query(`
      UPDATE trainers
      SET ${ setString }
      WHERE id=${ id }
      RETURNING *;
    `, Object.values(fields));

    //client.query needs to take the values passed in from the 2 param Object.values(fields). 
    //You can interpolate the rest 

    return trainer;
  } catch (error) {
    throw error;
  }
}
```
