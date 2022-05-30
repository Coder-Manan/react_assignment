import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getStorage, ref } from "firebase/storage";
import { getFirestore, collection, doc, setDoc , addDoc, getDoc} from "firebase/firestore";
import { setInterests } from '../../pages/main';

let uid;
const app  =  firebase.initializeApp({
    apiKey: "AIzaSyDRgzsTypd6EUesHgjSXm-2UW6AJ-UTpMU",
    authDomain: "casebook-aa4a8.firebaseapp.com",
    projectId: "casebook-aa4a8",
    storageBucket: "casebook-aa4a8.appspot.com",
    messagingSenderId: "23928511052",
    appId: "1:23928511052:web:3fd51187bf8dbffcddb2e9",
    measurementId: "G-4FZ270V1NP"
  });

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);
// Create a storage reference from our storage service
// export const storageRef = ref(storage);
export const auth = app.auth();
export const db = getFirestore(app);

// export const storageRef = app.storage().ref();
export default {app};

const logIn = async(email, password) => {
  auth.signInWithEmailAndPassword(email, password)
  .then((res)=>{
    uid = res.user.uid;
    getUserInterests();
  })
  .catch((error)=>{
    if (error.toString().slice(0,108) == "FirebaseError: Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)"){
      alert("Wrong password");
  }
  else if (error.toString().slice(0,83) == "FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email)"){
      alert("Invalid email id");
  }
  else if (error.toString().slice(0,136) == "FirebaseError: Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)"){
      alert("No user exists with given email id");
  }
  else{
      alert("Error");
      console.log(error);
  }
  })
}

async function signUp (email, password, username, interests) {
  auth.createUserWithEmailAndPassword(email, password).then((res)=>{
    uid=res.user.uid;
    console.log(uid);
    try
    {
      const userRef = doc(db, "data", uid);
      setDoc(userRef, {
      Name: username,
      Email: email,
      Interests: interests
    });}
  catch(error){
    console.log(error);
    alert("Error");
  }})}

  
async function getUserInterests(){
  const userdoc = await getDoc(doc(db, "data", uid));
  if (userdoc.exists()) {
    setInterests("data", userdoc.data().Interests);
    return userdoc.data().Interests;
  }
  else{
    alert("Error");
    return [];
  }
}

const logOut = async() => {
  try{
    await auth.signOut();
  }
  catch (e) {
    console.log(e);
    alert("error");
  }
}


function getPosts(){
  //how to return?
  //along with posts, comments also need to be returned
}

export {logIn, logOut, signUp, getUserInterests};

// https://firebasestorage.googleapis.com/v0/b/casebook-aa4a8.appspot.com/o/