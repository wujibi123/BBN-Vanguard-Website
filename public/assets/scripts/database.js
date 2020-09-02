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

var articlesRef = db.collection("articles");

articlesRef.orderBy("issue", "desc").orderBy("name") // On home page, show articles by issue alphabetically
  .get().then(function(querySnapshot) { // Showing articles
    var i = 0;
    querySnapshot.forEach(function(doc) {
        console.log("Document data:", doc.data());
        document.getElementById("title_" + i).innerHTML = doc.data().name;
        document.getElementById("issue_" + i).innerHTML = doc.data().issue.toDate().toLocaleDateString();
        document.getElementById("article_" + i).src = doc.data().link;
        document.getElementById("article_" + i).style.display = "block";
        i++
    })
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });

//function filterType