import { initializeApp } from 'firebase/app'
// import 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBolXcqXi-E6zzYrpLdXCf7uoSR8LAQk2I",
    authDomain: "bead-box.firebaseapp.com",
    projectId: "bead-box",
    storageBucket: "bead-box.appspot.com",
    messagingSenderId: "1059503014898",
    appId: "1:1059503014898:web:0c96fe9650ced0ea4da16b",
    measurementId: "G-WXXZ93BFS6"
  };
  
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
// export const firestore = firebase.firestore();



export const signInWithGoogle = () => 
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // The signed-in user info.
    // const user = result.user;
    // // ...
  }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // // ...
  });

// export default firebase