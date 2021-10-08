

  import firebase from 'firebase'




  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCeNOAoB0rWXhhkqdnQkbcP0fQ0gyMLmEQ",
    authDomain: "instagram-clone-bcdf4.firebaseapp.com",
    projectId: "instagram-clone-bcdf4",
    storageBucket: "instagram-clone-bcdf4.appspot.com",
    messagingSenderId: "342842081744",
    appId: "1:342842081744:web:728ba9ef5e5ace138b39d5",
    measurementId: "G-Q5SZ83WN0E"
  })

  const db= firebaseApp.firestore()
  const auth= firebase.auth()
  const storage = firebase.storage()

  export  {db , auth , storage}


