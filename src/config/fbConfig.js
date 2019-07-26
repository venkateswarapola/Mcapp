import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCIa_xtKFX1h4EwGvp8Rj3UTpXxOpdBa_A",
    authDomain: "mcs-club-plan.firebaseapp.com",
    databaseURL: "https://mcs-club-plan.firebaseio.com",
    projectId: "mcs-club-plan",
    storageBucket: "",
    messagingSenderId: "904006564764",
    appId: "1:904006564764:web:3bb2f90d33661336"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;