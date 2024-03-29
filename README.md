# Survey app

Create and share survey with the results.

Using docker compose for development server and database

## Client

### Todo

- [x] basic form
- [x] handle form
- [x] create dynamic form
- [x] display all surveys
- [ ] add forms via UI builder
  - [x] implement useFieldArray logic
  - [x] basic radio form
  - [x] generate survey link
  - [ ] add more field types
  - [ ] add more options
- [x] basic styles
- [x] add routing
- [ ] responsive styling
- [ ] input components
  - [ ] text-field
  - [ ] checkbox
- [ ] adjust to new response structure
- [ ] loading component
- [ ] better error handling
- [ ] if user voted, cannot vote again
- [ ] resutls
  - [ ] results page
  - [ ] results charts
  - [x] show results count
  - [ ] format results in percentages

### Tools

- react
- tailwind
- react-hook-form
- framer-motion
- react-router-dom
- swr TODO: change to react query

## Server

### Todo

- [x] setup basic server
- [x] connect to db
  - [ ] create migrations
  - [ ] create seeders
- [x] make a vars file
- [ ] models /kinda
- [ ] add ss validation
- [ ] create response structure
- [ ] define routes and controllers
- [ ] if user voted, cannot vote again
  - [x] create new survey
  - [x] get existing survey
  - [x] get all
  - [x] generate and serve results
  - [ ] endpoint to show results in a dedicated page

## Tools

- mongodb/mongoose
- express
- nodemon
