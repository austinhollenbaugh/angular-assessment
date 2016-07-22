angular
	.module('assessment')
	.service('mainService', function($http) {

		this.getData = function() {
			return $http({
				method: 'GET',
				url: 'http://practiceapi.devmounta.in/products'

			}).then(function(response) {
				var products = response.data;
				console.log(products);
				return products;
			})
		}

	});