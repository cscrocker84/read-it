app.config(($routeProvider, $locationProvider) => {

	// Initialize Firebase
  $locationProvider.hashPrefix('');
    firebase.initializeApp({
    apiKey: "AIzaSyCKytK5-PfhHUIUhP4DUOqftq895yPe-xo",
    authDomain: "who-reads.firebaseapp.com",
    databaseURL: "https://who-reads.firebaseio.com",
    storageBucket: "who-reads.appspot.com",
    messagingSenderId: "308092666775"
});

 const checkForAuth = {
      checkForAuth ($location) {

        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            $location.url('/login')
          }
        })
      }
    }
  $locationProvider.hashPrefix("")
  $routeProvider
    .when("/",{
      controller: "HomeCtrl",
      templateUrl: "/app/partials/homePage.html"
    })
    .when("/login",{
      controller: "LoginCtrl",
      templateUrl: "/app/partials/loginPage.html"
    })
    .when("/newPost",{
      controller: "PostCtrl",
      templateUrl: "app/partials/newPost.html",
      resolve: checkForAuth
    })
    .when("/register",{
      controller: "RegisterCtrl",
      templateUrl: "app/partials/register.html"
    })

})
