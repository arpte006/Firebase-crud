import   firebase  from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCMQueA8NAv_HFrARJZuLFjyWUbL2EmIJg",
  authDomain: "react-crud-f2547.firebaseapp.com",
  databaseURL: "https://react-crud-f2547.firebaseio.com",
  projectId: "react-crud-f2547",
  storageBucket: "react-crud-f2547.appspot.com",
  messagingSenderId: "737254818938",
  appId: "1:737254818938:web:c99e7624ab8b2bbc10a7c3"
};
  // Initialize Firebase
 var fireDb  =  firebase.initializeApp(firebaseConfig);
 
 export default   fireDb.database().ref();