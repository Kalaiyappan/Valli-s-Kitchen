var vallikitchenControllers = angular.module('vallikitchenControllers', ['ngAnimate', 'ui.bootstrap']);

vallikitchenControllers.controller('MainController',function ($scope){
	console.log("Entering controller");
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides ;
  $scope.addSlide = function() {
    //var newWidth = 600 + slides.length + 1;
    $scope.slides = [{
      image: 'images/slide-image1.jpg',
      text: 'Slide Image - One'
    },{
      image: 'images/slide-image2.jpg',
      text: 'Slide Image - Two'
    },{
      image: 'images/slide-image3.jpg',
      text: 'Slide Image - Three'
    },{
      image: 'images/slide-image4.jpg',
      text: 'Slide Image - Four'
    },{
      image: 'images/slide-image5.jpg',
      text: 'Slide Image - Five'
    }];
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
	
});