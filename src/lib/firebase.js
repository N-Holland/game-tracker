const firebase = require("firebase/app");
//require("firebase/storage");
require("firebase/firestore");
require("firebase/auth");

/**
 * Initialize the Firebase database connection.
 * @returns {firebase.firestore.Firestore}
 */
function InitFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDiS9LdCd84zIHKN5Nx4tkK1fkuV7H7vPs",
    authDomain: "gametracker-97692.firebaseapp.com",
    projectId: "gametracker-97692",
    storageBucket: "gametracker-97692.appspot.com",
    messagingSenderId: "164934474584",
    appId: "1:164934474584:web:f04cd02baad7b5cc97632d",
    measurementId: "G-YZ6SBM5ZWG"
  };

  firebase.initializeApp(firebaseConfig);

  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.NONE)
    .then(() => {
      //const provider = new firebase.auth.GoogleAuthProvider();
    })
    .catch(error => {console.log(error)});
}

InitFirebase();

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const { currentUser } = auth;
const usersCollection = db.collection("users");

export { db, storage, auth, usersCollection, currentUser };


