# PERN-TODO-BE

# CREATE A - db.js file on the parent folder 
# with the below code declarations in order to interact with your postgresql db 

const Pool = require('pg').Pool;

const pool = new Pool({
    user: "",
    host: "localhost",
    database: "" ,
    password: ""  ,
    port: "5432",
})

module.exports = pool;

N/B
user - "postgres" or your database username
host - 'localhost'or the host your using,
database - 'perntodo' or name of database created
password -  specify your database password
port - 5432 or specify port the db is listening from

IMPORTANT QUERY
psql -U postgres - connects you to postgres sql and prompts you to enter your password
\l - list all database in the postgres server
\c smartbrain - connects to a particular database
\dt - view the tables details in this database
CREATE DATABASE perntodo; - creates a particular database
OTHER QUERY & resources - https://node-postgres.com/features/queries
                        - https://www.postgresql.org/docs/14/sql-delete.html

