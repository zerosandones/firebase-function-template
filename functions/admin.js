/** 
 * use this file to only initialize the admin object once in the project.
 * If the files that require an admin object just import this file and use it's admin object
 */
import * as admin from 'firebase-admin';

exports.admin = admin.initializeApp(config().firebase);
