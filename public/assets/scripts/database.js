// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA8w9vt-l10fU42j_8AuUuzWNqoIG3A-WU",
  authDomain: "bbn-vanguard.firebaseapp.com",
  databaseURL: "https://bbn-vanguard.firebaseio.com",
  projectId: "bbn-vanguard",
  storageBucket: "bbn-vanguard.appspot.com",
  messagingSenderId: "991286379575",
  appId: "1:991286379575:web:50ad92b8e0eb05aac2ebb2",
  measurementId: "G-EXBV0XV8HM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Initialize Cloud Functions through Firebase
var functions = firebase.functions();

var docRef = db.collection("data").doc("articles");
var nameQuery = docRef.orderBy("name");

docRef.get().then(function(querySnapshot) {
    var i = 0;
    querySnapshot.forEach(function(doc) {
        i++;
        console.log(i);
        console.log("Document data:", doc.data());
        document.getElementById("article_1").src = doc.data().link;
    })
}).catch(function(error) {
    console.log("Error getting document:", error);
});