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
var issuesRef = db.collection("issues");

showHome();

function showHome() {
  hideBlocks();
  document.getElementById("homeHeader").innerHTML = "Checkout our latest issues!";
  issuesRef.orderBy("date", "desc") // On home page, show articles by issue alphabetically
  .get().then(function(querySnapshot) { // Showing articles
    var i = 0;
    querySnapshot.forEach(function(doc) {
        document.getElementById("issue_" + i).innerHTML = doc.data().date.toDate().toLocaleDateString();
        document.getElementById("volume_" + i).innerHTML = "Volume " + doc.data().volume;
        document.getElementById("article_" + i).src = doc.data().link;
        document.getElementById("article_" + i).style.display = "block";
        i++
    })
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
}

function showCategory(type) {
  //valid types: "Home", "Sports", "On Campus", "Off Campus", "Features", "Arts", "The Back Page", "Current Topics"
  document.getElementById("homeHeader").innerHTML = type;
  hideBlocks();
  articlesRef.where("type", "==", type).orderBy("issue", "desc")
  .get().then(function(querySnapshot) { // Showing articles
    var i = 0;
    querySnapshot.forEach(function(doc) {
        document.getElementById("issue_" + i).innerHTML = doc.data().issue.toDate().toLocaleDateString();
        document.getElementById("volume_" + i).innerHTML = "Volume " + doc.data().volume;
        document.getElementById("article_" + i).src = doc.data().link;
        document.getElementById("article_" + i).style.display = "block";
        i++
    })
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
}

function advancedSearch(type, issue) {
  //valid types: "All", "Sports", "On Campus", "Off Campus", "Features", "Arts", "The Back Page", "Current Topics"

  document.getElementById("homeHeader").innerHTML = type;
  hideBlocks();
  var query;

  if ((type === "All" || type === "") && (issue === "All" || issue === "")) {
    query = articlesRef.orderBy("issue", "desc");
  } else if ((type === "All" || type === "") && (issue != "All" || issue != "")) {
    query = articlesRef.where("issue", "==", firebase.firestore.Timestamp.fromDate(new Date(issue))).orderBy("type");
  } else if ((type != "All" || type != "") && (issue === "All" || issue === "")) {
    query = articlesRef.where("type", "==", type).orderBy("issue", "desc");
  } else {
    query = articlesRef.where("issue", "==", firebase.firestore.Timestamp.fromDate(new Date(issue))).where("type", "==", type);
  }

  query.get().then(function(querySnapshot) { // Showing articles
    var i = 0;
    querySnapshot.forEach(function(doc) {
        document.getElementById("issue_" + i).innerHTML = doc.data().issue.toDate().toLocaleDateString();
        document.getElementById("volume_" + i).innerHTML = "Volume " + doc.data().volume;
        document.getElementById("article_" + i).src = doc.data().link;
        document.getElementById("article_" + i).style.display = "block";
        i++
    })
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
}

function hideBlocks() {
  for (var i = 0; i <= 10; i++) {
    document.getElementById("issue_" + i).innerHTML = "";
    document.getElementById("volume_" + i).innerHTML = "";
    document.getElementById("article_" + i).style.display = "none";
  }
}
//function filterType