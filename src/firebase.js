import firebase from 'firebase';

const firebaseConfig = {

  apiKey: "AIzaSyCZTjSCyKNy-TPcnPL2rArYIzMe1equvZo",

  authDomain: "mam-epsp.firebaseapp.com",

  databaseURL: "https://mam-epsp-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "mam-epsp",

  storageBucket: "mam-epsp.appspot.com",

  messagingSenderId: "65667082778",

  appId: "1:65667082778:web:16834e6cc778f30e26bfa3"

};






// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;