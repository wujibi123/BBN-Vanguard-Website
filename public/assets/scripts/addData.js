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


articlesRef.doc("On_Campus_49").set(
          {
            issue: firebase.firestore.Timestamp.fromDate(new Date("September 1, 2020")),
            link: "https://drive.google.com/file/d/1rAQkPo1eKi--O-19LSBwD9KnGebQNwu2/preview",
            name: "On_Campus_49",
            type: "On Campus",
            volume: "49"
          }
        );
articlesRef.doc("Off_Campus_49").set(
          {
            issue: firebase.firestore.Timestamp.fromDate(new Date("September 1, 2020")),
            link: "https://drive.google.com/file/d/1WACGW3iSGUPePNMu5xdaRjEXS1MPmy4q/preview",
            name: "Off_Campus_49",
            type: "Off Campus",
            volume: "49"
          }
        );
articlesRef.doc("Sports_49").set(
          {
            issue: firebase.firestore.Timestamp.fromDate(new Date("September 1, 2020")),
            link: "https://drive.google.com/file/d/1EV1sbrEmDmAmUgP_IbneOXA87vj1wKRG/preview",
            name: "Sports_49",
            type: "Sports",
            volume: "49"
          }
        );
articlesRef.doc("Features_49").set(
          {
            issue: firebase.firestore.Timestamp.fromDate(new Date("September 1, 2020")),
            link: "https://drive.google.com/file/d/1SUwWL3n5xjJODFL6GD57ROSCB0mq3HhX/preview",
            name: "Features_49",
            type: "Features",
            volume: "49"
          }
        );
articlesRef.doc("Arts_49").set(
          {
            issue: firebase.firestore.Timestamp.fromDate(new Date("September 1, 2020")),
            link: "https://drive.google.com/file/d/13Y7TFtyqsqlOvK7NKW4WpPD23rO0O6KT/preview",
            name: "Arts_49",
            type: "Arts",
            volume: "49"
          }
        );
articlesRef.doc("Arts_49").set(
          {
            issue: firebase.firestore.Timestamp.fromDate(new Date("September 1, 2020")),
            link: "https://drive.google.com/file/d/13Y7TFtyqsqlOvK7NKW4WpPD23rO0O6KT/preview",
            name: "Arts_49",
            type: "Arts",
            volume: "49"
          }
        );
articlesRef.doc("Current_Topics_49").set(
          {
            issue: firebase.firestore.Timestamp.fromDate(new Date("September 1, 2020")),
            link: "https://drive.google.com/file/d/1TIcOqnQSfapD4-KIYTc-NO7-H58XJN4R/preview",
            name: "Current_Topics_49",
            type: "Current Topics",
            volume: "49"
          }
        );
articlesRef.doc("The_Back_Page_49").set(
          {
            issue: firebase.firestore.Timestamp.fromDate(new Date("September 1, 2020")),
            link: "https://drive.google.com/file/d/1-5joxQzPCiK39hYyGLz2aOI4TjZIEliY/preview",
            name: "The_Back_Page_49",
            type: "The Back Page",
            volume: "49"
          }
        );


issuesRef.doc("v49").set(
          {
            date: firebase.firestore.Timestamp.fromDate(new Date("September 1, 2020")),
            link: "https://drive.google.com/file/d/11jAczSfTWXz6OBNwfugvCUdsxAWYPkg5/preview",
            name: "v49",
            volume: "49"
          }
        );