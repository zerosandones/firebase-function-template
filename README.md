# firebase-function-template

This project provides a template for creating a new Google Firebase cloud function project. The idea and code has been taken from this article [Organizing your Firebase Cloud Functions](https://codeburst.io/organizing-your-firebase-cloud-functions-67dc17b3b0da) and modified . The general idea of the project is to create a file structure to help plan your layout of the folders and file names.

## index.js

The index file finds all files in the function directory and child directories which end in **.function.js**. They are then added to the index file so when deployed the functions will be registered with Firebase.

## admin.js

The admin file creates an instance of the admin object that can be used by all function instances instead of have to create an admin instance in each function and catch the exception if the object has already been initialized by another function. Import this file in each function and use the exported admin object.

## function names

The name of the deployed function will be the concatenation of the path to the file and the name of the file with the .function.js stripped off.
