import firebase from "firebase";
import "firebase/database";

let config = {
    apiKey: "AIzaSyB6ANY9wGZWECfoS0-zt8SjCX-FjmNdw-8",
    authDomain: "first-project-7a6c8.firebaseapp.com",
    databaseURL: "https://first-project-7a6c8.firebaseio.com",
    projectId: "first-project-7a6c8",
    storageBucket: "first-project-7a6c8.appspot.com",
    messagingSenderId: "540736207894",
    appId: "1:540736207894:web:d86dc689ed053270c28937",
    measurementId: "G-QDPZ6S6SHV"
};
firebase.initializeApp(config);

export default firebase.database();