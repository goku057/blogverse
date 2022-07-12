# Getting Started with BlogVerse
To run this app node, npm, npx and mysql(xampp) needs to be installed 
its great if nodemon is installed

# Steps To run the program

## `MySql Database setup`
create a database named `blogverse` and import the `blogverse.sql` file into the database
I have created 3 verified dummy users who can login and already has some dummy posts and comments.
For new users they have to signup and get their id verified
### `dummy username and their passwords`
username = `dummy1`
password = `1234`

username = `dummy2`
password = `1234`

username = `dummy3`
password = `1234`

and `run your xampp server`

## `Backend Setup`

### `setting up .env file for email verification`
from `blogverse` directory go to `cd backend` and create an .env file and put the following credentials
`email='your google email'` (from which mail you will send verification mail to users)
`pass='your google app password` 
to make this work you need to make sure that you have placed app pass word for `pass` variable
[Click here to get a tutorial on how to get APP password](https://www.youtube.com/watch?v=xvX4gWRWIVY)

### `running backend server`
from `blogverse` directory go to `cd backend` and type the following commands in the terminal
`npm install`
`nodemon app` (make sure you have nodemon installed)
if it is success the server will be up on [http://localhost:5000](http://localhost:5000)

## `Front end setup`

from `blogverse` directory go to `cd frontend` and type the following commands in the terminal
`npm install`
`npm start`
if it is success the server will be up on [http://localhost:3000](http://localhost:3000)

after that you are free to use the app
