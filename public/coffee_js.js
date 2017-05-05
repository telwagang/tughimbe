var app = angular.module("ParnterApp", ['ngRoute']);

 

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: "assets/partials/home.html",
                controller: 'MainController'
            })
        .when('/transport',
            {
                templateUrl: "assets/partials/transport.html",
                controller: 'TransportController'
            })
        .when('/log',
            {
                templateUrl: "assets/partials/log.html",
                controller: 'logController'
            })
        .when('/export',
            {
                templateUrl: "assets/partials/export.html",
                controller: 'ExportController'
            })
        .when('/hotel',
            {
                templateUrl: "assets/partials/hotel.html",
                controller: 'HotelController'
            })
        .when('/contact',
            {
                title: "",
                templateUrl: "assets/partials/contact.html",
                controller: 'ContactController'
            })
      
       .when('/sunflower',
            {
                title: "",
                templateUrl: "assets/partials/sunflower.html",
                controller: 'SunflowerController'
            })
      
        .otherwise({
            templateUrl: "assets/partials/error.html"
        });


}]);
app.controller('MainController', ['$scope', '$http',
	  function ($scope, $http) {

    
    $scope.cssfile = 'home';
    

}])

    .controller('TransportController',['$scope', '$http', function ($scope, $http) {
        $scope.headin = '';
        $scope.cssfile = 'apprentice';
    }])


    .controller('logController',['$scope', '$http', function ($scope, $http) {
        $scope.headin = 'M A S T E R S ';
        $scope.cssfile = 'master';
    }])

    .controller('ExportController',['$scope', '$http', function ($scope, $http) {
        $scope.heaidn = ' E X P L O R E ';
        $scope.cssfile = 'explore';

    }])

    .controller('HotelController',['$scope', '$http', function ($scope, $http) {
        $scope.headin = 'A C C O U N T';
        $scope.cssfile = 'account';
        
        $scope.profile = [
            {status: "am a bigger than the world for without me the world would be just like anyther planet",
            age : "21" , masters: "210" , apprentices : "220" , likesbyother : "140",
            otherslikedbyyhu : "42", contribution: "130"}
        ];

    }])
    .controller('ContactController',['$scope', '$http', function ($scope, $http) {
        $scope.headin = 'L O G I N';
        $scope.cssfile = 'login';
    }])
    .controller('SunflowerController',['$scope', '$http', function($scope, $http){
        $scope.headin = 'N O T I F I C A T I O N';
        $scope.cssfile = 'notification';
    
    
            



    }]);