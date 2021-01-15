import firebase from 'firebase';



  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();




  const signIn = () => {
    auth.signInWithPopup(provider).then(results => {
        console.log(results)
    }

    ).catch(error => console.log(error))
  }