(function(){
	angular.module('awesome', [])
	.directive('widget', function() {
	  return {
	      restrict: 'C',
	      link: function(scope, elem, attrs) {
	      	$(elem).geopattern(scope.item.name, {
	      		generator: 'squares'
	      	});
	      }
	  };
	})
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