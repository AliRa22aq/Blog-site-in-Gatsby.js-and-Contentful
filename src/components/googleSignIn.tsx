import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAfmjcK0SsuChX_cYRwCJq45tsHCmctq28",
    authDomain: "blog-e7108.firebaseapp.com",
    projectId: "blog-e7108",
    storageBucket: "blog-e7108.appspot.com",
    messagingSenderId: "538281889243",
    appId: "1:538281889243:web:96123a606aa17fb559ebfe"
  };

  firebase.initializeApp(firebaseConfig);




export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();




    