# React exam task

### This is a React project where it is possible to register as a new user, login, logout, create content and access the content you've created. You can only access your own content and you can only create or access it when you are logged in.

## How to use

In order to use this project you have to do the following:

1. Clone or download the project from Github. Make sure you are in the master branch when you do this;
2. Open the bash terminal of the main repository in VsCode, enter 'npm install' and press enter in order to download all required node modules;
3. Change the '.env.example' file name into '.env'. In this file, instead of the angle brackets, enter the base URL for your back end. For testing purposes the URL used was 'https://autumn-delicate-wilderness.glitch.me/';
4. Type 'npm start' into the terminal and press enter. Now you can browse the pages of this project.

## Things to consider

- In order to create or watch content, you have to register and login;
- You are still logged in when the page reloads as the token is saved in local storage. In order to logout, you have to either press the logout button, or delete the 'token' item in local storage;
- You cannot login or register a new user when you are already logged in. If you try to go to login or register page when logged in, you will get a message that will help you navigate back;
- You cannot submit forms if any of the fields are empty. The form will not send empty values to the back end;
- The responsive design makes sure you can browse the project files on any device.
