import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAzA2D5FS4rSFSmWp4-nthW9T1Sm8TuuOY",
    authDomain: "facebook-clone-aea04.firebaseapp.com",
    databaseURL: "https://facebook-clone-aea04.firebaseio.com",
    projectId: "facebook-clone-aea04",
    storageBucket: "facebook-clone-aea04.appspot.com",
    messagingSenderId: "723733081906",
    appId: "1:723733081906:web:ba654890da60d558aeb12b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  // Authentication

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;