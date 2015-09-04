(function(){
	angular.module('awesome', [])
	.controller('filterFormController', ['$scope', function($scope){
		$scope.itens = [1,2,3,4,5,6];
	}]);
})();