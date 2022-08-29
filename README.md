# Client side interface for the  API Reqres

This project was developed with [Create React App]

The code is 
 - well-structured
 - easy to read
 - contains the necessary comments

## Used Technologies: 

TypeScript

React-Router v6

Redux

Design libraries/Frameworks used: React-bootstrap, bootstrap

## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.
### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Functionality:

Website is not available without authorization, authorization window shown for all client urls

User can register, with the ability to open this route by url; after successful registration redirects to the authorization page

All pages except for registration are available to an authorized client

After authorization, the client sees the main page with a list of users

Client side routing

## Pages:

Authorization: With an authorization form and the ability to go to registration

Registration page: With registration form

Home page: header with logout button and view data of the current authorized user, a list of users in the form of cards

User page: header as on the main page, viewing the data of a particular user in the form of a table.

Not Found page 404: header and page text 'this page does not exist'.

## Notes
This Reqres API does not allow creating new users therefore you can only select from existing users. 
Some of them as an example: "michael.lawson@reqres.in", "lindsay.ferguson@reqres.in", "tobias.funke@reqres.in", "byron.fields@reqres.in".
And also you can enter any password when loggind in and it will pass.

      
