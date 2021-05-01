import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "**********************",
    authDomain: "***************",
    projectId: "************",
    storageBucket: "*************",
    messagingSenderId: "*************",
    appId: "*:************:web:****************"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();