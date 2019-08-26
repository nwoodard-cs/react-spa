import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBWoQy6Paly6En3LHFLfKP0dQvcswXS0tI",
  authDomain: "react-spas-f9629.firebaseapp.com",
  databaseURL: "https://react-spas-f9629.firebaseio.com",
  projectId: "react-spas-f9629",
  storageBucket: "",
  messagingSenderId: "865424217501",
  appId: "1:865424217501:web:4025d1ad4f391439"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = new firebase.auth()

export default firebase
