'use strict';
/** EXPORT ALL FUNCTIONS
 *
 *   Loads all `.function.js` files
 *   Exports a cloud function matching the file name
 *   Author: David King
 *   Edited: Tarik Huber
 *   Edited: David Glendenning
 *   Based on this thread:
 *     https://github.com/firebase/functions-samples/issues/170
 */
const glob = require("glob");
const camelCase = require("camelcase");

const files = glob.sync('./**/*.function.js', { cwd: __dirname, ignore: './node_modules/**'});

for(let index=0, filesFound=files.length; index < filesFound; index++){
  const file = files[index];
  const functionName = camelCase(file.slice(0, -12).split('/').join('_')); // Strip off '.function.js'
  if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === functionName) {
    exports[functionName] = require(file);
  }
}