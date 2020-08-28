// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
/*
const admin = require('firebase-admin');
var serviceAccount = require("/Users/DanBi/Documents/GitHub/BBN-Vanguard-Website/functions/bbn-vanguard-firebase-adminsdk-lok9s-4f50693539.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bbn-vanguard.firebaseio.com"
});*/

exports.getDatabase = functions.https.onCall(() => {
	return {
		test : "hello"
	};
});
