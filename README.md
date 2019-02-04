## Employee_APIs
This application provides a set of API calls to do GET, PUT, POST, DELETE operations on employee details using Node, Postgresql

### Requirements
- Nodejs
- Expressjs 
- Postgresql
- Knex
- Bookshelf

### Setup
- Clone this repository and setup the database using knexfile
- Run the migration file using `knex migrate:latest`
- Run it locally, port 8001

### Install dependencies
- npm install --save

### Run the application
`node app.js`

### Endpoints 
- Get the employee details: `/employee`
- Get an employee details: `/employee/:id`
- Post the employee details: `/employee`
- Delete the employee details: `/employee/:id`
