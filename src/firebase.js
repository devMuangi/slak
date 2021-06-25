import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyArXi36BYo84zIxqWLUjSSVL6qlqFu7Tpc",
    authDomain: "slak-c295c.firebaseapp.com",
    projectId: "slak-c295c",
    storageBucket: "slak-c295c.appspot.com",
    messagingSenderId: "997429570891",
    appId: "1:997429570891:web:6bfe8d2a26fed0f1a3ccce"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;