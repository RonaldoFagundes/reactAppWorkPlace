import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/auth"
import "firebase/compat/firestore"

//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {

    apiKey: "AIzaSyBwMA2-mANjZu0wXxBXVRm-a7VtBjJEFq4",
    authDomain: "workplace-33b7c.firebaseapp.com",
    projectId: "workplace-33b7c",
    storageBucket: "workplace-33b7c.appspot.com",
    messagingSenderId: "119414271584",
    appId: "1:119414271584:web:5c73c73f5f68167c4fdd05",
    measurementId: "G-RQV2DRFRJR"

    };
    


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

   
    export default firebase;