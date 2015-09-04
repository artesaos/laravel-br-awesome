(function(){
	angular.module('awesome', [])
	.controller('filterFormController', ['$scope', '$http', function($scope, $http){
		var init = function() {
			$http.get('itens.json')
				.then(function(_response){
					$scope.itens = _response.data;
				});
		};

		$scope.itens = [];

		$scope.setFilter = function(_value){
			$scope.query = _value;
		}

		init();
	}]);
})();