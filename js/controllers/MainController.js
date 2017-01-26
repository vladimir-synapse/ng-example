angular.module('mainApp')
    .directive('testDirective', function(){
      return {
        restrict: 'E',
        templateUrl: 'test-directive.html'
      }
    })
    .directive('testSecond', function(){
      return {
        restrict: 'A',
        templateUrl: 'test-second.html'
      }
    })
    .controller('MainController', function($scope, $http, exampleService){
      var data = {
        name: 'Test data',
        digit: 2.45,
        description: '. . .',
        condition: false,
      }

      $scope.init = function() {
        $scope.data = data;
        $scope.inputText = 'Some text';
      }

      $scope.change = function() {
        $scope.data.condition = !$scope.data.condition;
      }

      $scope.submitForm = function(data) {
        console.log(data);
      }
    });
