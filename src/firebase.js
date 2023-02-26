import firebase from 'firebase';
//import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAHPyH0HXVdQlR3fSHaQA2NYE8saHyJ5pI",
    authDomain: "linkedin-8e0db.firebaseapp.com",
    projectId: "linkedin-8e0db",
    storageBucket: "linkedin-8e0db.appspot.com",
    messagingSenderId: "304335572229",
    appId: "1:304335572229:web:1e8dc355f83f288e25bb6c",
    measurementId: "G-14ELPFH366"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };