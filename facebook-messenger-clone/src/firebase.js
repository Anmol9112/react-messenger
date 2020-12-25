import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCI98VwltHPp_23WjzCVcOQ17YYjAA4dts",
    authDomain: "facebook-messenger-clone-40b68.firebaseapp.com",
    projectId: "facebook-messenger-clone-40b68",
    storageBucket: "facebook-messenger-clone-40b68.appspot.com",
    messagingSenderId: "455880887621",
    appId: "1:455880887621:web:7d244138fcb79f9509822c",
    measurementId: "G-NF9GFZXEPB"
});
 const db= firebaseApp.firestore();

 export default db;