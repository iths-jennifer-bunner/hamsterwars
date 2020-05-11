
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAPVpLAu40mJKb0bA3lxxtOtrYm5aRsrQc",
    authDomain: "fab-hamster-wars-app.firebaseapp.com",
    databaseURL: "https://fab-hamster-wars-app.firebaseio.com",
    projectId: "fab-hamster-wars-app",
    storageBucket: "fab-hamster-wars-app.appspot.com",
    messagingSenderId: "145232766001",
    appId: "1:145232766001:web:191fe77b8b4b5035232110"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // const db = firebase.firestore();

  //slänga upp i firestore
  const { db } = require("./../firebase");
  const hamsters = require('./../data.json')

  const jsonToFs = () => {
    try {
      hamsters.forEach((hamster)=> {
        db.collection('hamsters').doc(hamster.id.toString()).set(hamster)
          
          .then(resp => {console.log('DB updated!')})
          .catch(err => console.error(err))
          
          
        })
      }catch (err){
        console.error(err);
        
      }
  }

  jsonToFs();