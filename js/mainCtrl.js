angular
	.module('assessment')
	.controller('mainCtrl', function($scope, mainService) {

		$scope.getProducts = mainService.getData();

	});