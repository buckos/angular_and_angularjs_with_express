(function () {
  angular
    .module('legacy')
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/pagenotfound');

      $stateProvider
        .state('angularjs', {
          url: "/angularjs",
          templateUrl: './app/angularjs.html',
          controller: 'AngularJsCtrl'
        })
        .state('pagenotfound', {
          url: '/pagenotfound',
          templateUrl: './app/pagenotfound.html',
          controller: 'PageNotFoundCtrl'
        });
    });
})();
