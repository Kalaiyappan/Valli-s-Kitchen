var valliapp = angular.module('valliapp',['ngRoute','vallikitchenControllers']);

valliapp.config(function($routeProvider,$locationProvider){
    $routeProvider.when('/', {
      //console.log('Entering Home');
      templateUrl:'js/templates/home.html',
      controller:'MainController'
    });
    $routeProvider.when('/Portfolio', {
      //console.log('Entering Portfolio');
      templateUrl:'js/templates/portfolio.html',
      controller:'MainController'
    });
    $routeProvider.when('/About', {
      //console.log('Entering Portfolio');
      templateUrl:'js/templates/about.html',
      controller:'MainController'
    });
    $routeProvider.when('/Contact-Us', {
      //console.log('Entering Portfolio');
      templateUrl:'js/templates/contact-us.html',
      controller:'MainController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
     });
    $locationProvider.html5Mode(true);
    /*$locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });*/
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}

function signOut() {
  alert("Entering SignOut");
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }