angular
	.module('assessment')
	.directive('productDirective', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-tmpl.html',
			scope: {
				product: '='
			}
			// controller: function($scope, mainService) {
			// 	$scope.getProducts = mainService.getData();
			// },
		}
	})