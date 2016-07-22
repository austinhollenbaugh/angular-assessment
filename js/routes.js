angular
	.module('assessment')
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'views/about.html',
				controller: 'mainCtrl',
				controllerAs: 'vm'
			})
			.state('blog', {
				url: '/blog',
				templateUrl: 'views/blog.html',
				controller: 'mainCtrl',
				controllerAs: 'vm'
			})
			.state('shop', {
				url: '/shop',
				templateUrl: 'views/shop.html',
				controller: 'mainCtrl',
				controllerAs: 'vm'
			})
			.state('productDetails', {
				url: '/product-details',
				templateUrl: 'views/product-details.html',
				// controller
			})
	})