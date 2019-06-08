# firebase-function-template

This project providesa template for creating a new Google Firebase cloud function template. The idea and code has been taken from this article and modified [Organizing your Firebase Cloud Functions](https://codeburst.io/organizing-your-firebase-cloud-functions-67dc17b3b0da). The general idea of the project is to create a strucure to help plan your layout of the folders and file names.

## index.js

The index file finds all files in the function directory which end in **.function.js** and adds them to the index file so when deployed the functions will be registered with Firebase.

## function names

The name of the deployed function will be the concatination of the path to the file and the name of the file with the .function.js stripped off.
