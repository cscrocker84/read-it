app.config(($routeProvider, $locationProvider) => {

	// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCKytK5-PfhHUIUhP4DUOqftq895yPe-xo",
    authDomain: "who-reads.firebaseapp.com",
    databaseURL: "https://who-reads.firebaseio.com",
    storageBucket: "who-reads.appspot.com",
    messagingSenderId: "308092666775"
  };
  firebase.initializeApp(config);
})

 $locationProvider.hashPrefix("")
  $routeProvider
  .when('/main', {
    controller: 'homeCtrl',
    templateUrl: '/app/components/homePage.html',
    resolve: {
      // authentication resolves from factories
    }
  })
}
