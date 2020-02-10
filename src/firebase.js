import  firebase from 'firebase/app';
import 'firebase/firestore';
import { analytics } from 'firebase';




const firebaseConfig = {
  apiKey: "AIzaSyAJXZE1Isg67qG-jR70h7r7CfNkN-GhBwI",
  authDomain: "meetup-295f6.firebaseapp.com",
  databaseURL: "https://meetup-295f6.firebaseio.com",
  projectId: "meetup-295f6",
  storageBucket: "meetup-295f6.appspot.com",
  messagingSenderId: "519181839333",
  appId: "1:519181839333:web:9f85c17bec9b2920985d0c",
  measurementId: "G-Y0TMD0D1Z0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.analytics();




export default firebase;
  
 
