import firebase from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyCpYpTYPbj-PztSuGp3ZmpW6ny20yxpmis",
  authDomain: "nwitter-4c9f0.firebaseapp.com",
  databaseURL: "https://nwitter-4c9f0.firebaseio.com",
  projectId: "nwitter-4c9f0",
  storageBucket: "nwitter-4c9f0.appspot.com",
  messagingSenderId: "871969247344",
  appId: "1:871969247344:web:f6007f2cc25e0be62064b5",
};
export default firebase.initializeApp(firebaseConfig);