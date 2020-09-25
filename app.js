// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDz2d21rW2O-VyL1JkHeuoAfY6bVkxZAYo",
    authDomain: "finnman-expanse-tracker.firebaseapp.com",
    databaseURL: "https://finnman-expanse-tracker.firebaseio.com",
    projectId: "finnman-expanse-tracker",
    storageBucket: "finnman-expanse-tracker.appspot.com",
    messagingSenderId: "459605259773",
    appId: "1:459605259773:web:84f070921b6fd186339594"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.querySelector('#google-sgn-btn').addEventListener('click', function () {

    var provider =new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        //console.log(result);
        console.log(result.additionalUserInfo.profile.name);
        console.log(result.additionalUserInfo.profile.picture);
        window.localStorage.setItem("name",result.additionalUserInfo.profile.name);
        window.localStorage.setItem("picture",result.additionalUserInfo.profile.picture);

        window.location.href = 'home.html';


    }).catch(function(error) {
        console.log("Login Failed");

    });

})

