//create a an angular module
var app = angular.module("portfolioApp",[]); 

//the name of the module must be the same as mentioned in the html file
// "portfolioApp" is the name of the module
// to provide arguments to the modules we use "[]"


// now create an app controller
app.controller("appController", ($scope)=>{});


// we must connect this module and the controller with the html file using "ng-app"
// and "ng-module" attributes inside the body tag.

/*
<body ng-app = "portfolioApp" ng-module="appController">


*/