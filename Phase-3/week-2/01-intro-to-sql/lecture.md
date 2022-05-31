# Intro to DB
- What is a DB? Why do we use it?
- What is a query?
- What's a relational database management system 
  - A DB where tables relate to other tables 

Extra reading 
- A good database should ensure that we don't lose data no matter what happens and should properly handle requests for data 
- Deadlock - Two changes are coming in at the same time making a change to the exact same thing 

- Atomicity 
- Consistency
- Isolation 
- Durability 

## SQL
- What is sql? Structured Query Language
- Tables with Rows and Columns, much like a CSV
- Table 
    - The whole set of data
    - Set of nouns (Users, Posts, Messages)
- Row 
    - A single record in the set. A Single user 
- Column 
    - The different pieces of data that we're tracking for that record 
    - User => username, password. 
    - All rows in the table must have all columns 
- Primary Key 
    - An identifier for this and only this record. 
    Usually a auto-incrementing number

- What kind of Queries can we make?
    - Create 
    - Retreive 
    - Update
    - Delete

PSQL Commands - Commands to make in your terminal to interface with postgres
https://www.geeksforgeeks.org/postgresql-psql-commands/

SELECT 
*
FROM users 

WHERE
ORDER BY 
LIMIT 


