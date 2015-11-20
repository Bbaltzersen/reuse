'use strict';

angular.module('myApp', [])
.filter('name', function(){
  return function (input){
    return input[1] + ", " + input[0];
  };
})
.directive('loginForm', function(){
  return {
    templateUrl: "template/login.html"
  }
})
.factory('PersonFactory', function() {
  var persons = {};
  person.name = [];
  person.name.push({firstName: "Pala", lastName: "Gonno"});
  person.name.push({firstName: "Sono", lastName: "Virson"});
  person.name.push({firstName: "Trala", lastName: "Sirkstad"});
  return persons;
})
.controller('PersonController', ['PersonFactory', function(PersonFactory){
  var self = this;
  self.persons = PersonFactory;
}]);