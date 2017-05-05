var app = angular.module("TughimbeApp", ['ngRoute']);

 
app.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);
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
                title: "Poles",
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
        .when('/order', 
        {
            title:"Order Now ",
            templateUrl:"assets/partials/order.html",
            controller: 'orderController'
        })
         .when('/take', 
        {
            title:"take contact",
            templateUrl:"assets/partials/take.html",
            controller: 'TakeController'
        })
        .otherwise({
            templateUrl: "assets/partials/error.html"
        });
        

}]);




app.factory('dataprocess',function(){
    var formdata = [];
    var userdata = [];
   // formdata.list = {};
    datapool = function(num){
         formdata.push(num);
        
    };
    
    userpool = function(user){
        userdata.push({username:user.name,email:user.email,
                 company:user.company, mobile: user.mobile,
                 delivery:user.delivery});
    };
    
    getpool = function(){
        return formdata;
    } 
    return {
        datapool : datapool,
        userdata :userdata,
        getpool : getpool
    };
    
});
app.controller('MainController', ['$scope', '$http','$interval',
	  function ($scope, $http,$interval) {

      var timelinedata = [
          {
              id:1,
              date:27/07/1994,
              head:'Tito Ngajilo & Given Onia Ngajilo',
              mid:1994,
              text: 'The company was first founded by the two brothers but as individual companies..'
           
          },
          {
              id:2,
              date:12/04/2001,
              head:'Opening of Hotel and Confrences',
              mid:'july 14th, 2001',
              text:'the hotel and the confrences hall were opened in Mbeya,Tanzania. addvancing the business forward'
             
          },
           {
              id:3,
              date:27/07/2007,
              head:'Tughimbaghe Traders',
              mid:'july 24th, 2007',
              text:'The brothers joined forces and formed Tughimbaghe Traders.'
             
          },
           {
              id:4,
              date:12/04/2011, 
              head:'Oil Milling',
              mid:'2011',
              text:'Opening of the sunflower oil milling industry.'
            
          },
          {
              id:5,
              date:12/04/2015 ,
              head:'Shipping and Distribution',
              mid:' 2015',
              text:'Started shipping and distribution of demostic and international good and services but mostly electrical poles'
              
          }];
    
       
  
    var count = 0;
    var timer =  $interval(function () {
             count++;
            if(count >5)
            {
                count = 1 ;
            }
             
             
              $scope.timeline = _.findWhere(timelinedata,{id:count});
             
             
             
           },8400);
            

}])

    .controller('TransportController',['$scope', '$http','$interval', function ($scope, $http,$interval) {
        var backgroundurl = [{id: 1, url:'IMG_0146.jpg'},
                    {id:2, url:'IMG_0147.jpg'},
                    {id:3, url:'IMG_0149.jpg'},
                    {id:4, url:'IMG_0563.jpg'},
                    {id:5, url:'IMG_0564.jpg'},
                    {id:6, url:'IMG_123.jpe'},
                    {id:7, url:'IMG_124.jpe'},
                    {id:8, url:'IMG_125.jpe'},
                    {id:9, url:'IMG_126.jpe'},
                    {id:10, url:'IMG_127.jpe'},
                    {id:11, url:'IMG_128.jpe'},
                    {id:12, url:'IMG_129.jpe'},
                    {id:13,url:'IMG_2016.jpe'}];
                    
         
                  var count = 0;  
          var timer =  $interval(function () {
            count++;
            if(count >13)
            {
                count = 1;
            }
             
             var value = _.findWhere(backgroundurl,{id:count});
             var listvalue = _.pick(value,'url');
             $scope.pic = listvalue;
           },8400);
      }])

    .controller('orderController',['$scope','$http','dataprocess',
                      function ($scope, $http,dataprocess ) 
								 {
            $scope.DefaultOptions = ["Transmission Poles",  "Structural Timber","Profile & Splitpoles", "Flooring & Ceiling", "Building & Fencing Poles"];
		
			$scope.diameterOptions = ["120-140 mm","140-160 mm","	160-180 mm","180-200 mm"];
		
			$scope.legnthOptions = ["5 m" , "7 m" ,"9 m" ,"10 m","11 m" , "12 m" , "13 m" ,"14 m","15 m"];
                    
            $scope.ccadiameter = ['50/75mm','75/100mm', '100/125mm','125/150mm','150/175mm','175/200mm'];
                    
            $scope.ccalegnth = ['1.2m','1.5m','1.8m','2.1m','2.4m','2.7m','3m','3.6m','4.2m','4.8m','5.4m','6m','6.6m','7.2m','7.8m',
                    '8.4m','9m','10m','11m','12m','13m','14m','15m','16m'];
                    
		    $scope.treated = ['CCA','Creosote'];
              
            $scope.dropplegnth = ['0.9m','1.1m','1.2m','1.4m','1.5m','1.8m','2.1m','2.4m'];
              
             $scope.thlegnth = ['3m','3.6m','4.5m'];
             
             $scope.strulegnth = ['3m','3.6m','4.2m','4.8m','6m','6.6m'];
             
             $scope.strudiameter = ['38/38','38/50','38/76','38/76','38/152','38/228'];
             
             $scope.pidiameter = ['50/76','50/152','50/228','76/228'];
             $scope.flolegnth = ['D 22/102','D treated 22/102',' D 20/102','D 20/90','F 22/100','C 16/63'];
             var nxt = [],
                user = [];
             
             $scope.userinfo = function(Detail){
                 var dat= {};
                 dat = {
                     name:Detail.name,
                     email:Detail.email,
                     company:Detail.company,
                     mobile:Detail.mobile,
                     delivery:Detail.delivery
                     
                 }
                 user.push(dat);
             };
             
             $scope.formadd = function(Detail,num)
             {
                 var dat ={};
                 switch(num)
                 {
                     case 1:
                       dat = {
                          typeo:"Building Poles",
                          stypeo:Detail.ccchosen,
                          Diameter:Detail.ccdiameter,
                          leghtn:Detail.ccleghtn,
                          amount:Detail.ccno
                    
                 };
                     break;
                     case 2:
                       dat = {
                          typeo:"Building Poles",
                          stypeo:"droppers",
                          Diameter:"32/50",
                          leghtn:Detail.drleghtn,
                          amount:Detail.drno
                    
                 };
                     break;
                     case 3:
                       dat = {
                          typeo:"Building Poles",
                          stypeo:"Thatching laths",
                          Diameter:"25/32",
                          leghtn:Detail.thleghtn,
                          amount:Detail.thno
                    
                 };
                     break;
                     case 4:
                       dat = {
                          typeo:"Flooring",
                          stypeo:"ceiling",
                          Diameter:"",
                          leghtn:Detail.floleghtn,
                          amount:Detail.flono
                    
                 };
                     break;
                     case 5:
                       dat = {
                          typeo:"Profile",
                          stypeo:"Splitpoles",
                          Diameter:Detail.prodiameter,
                          leghtn:Detail.proleghtn,
                          amount:Detail.prono
                    
                 };
                     break;
                     case 6:
                       dat = {
                          typeo:"Structural",
                          stypeo:"Pine 38 S",
                          Diameter:Detail.strudiameter,
                          leghtn:Detail.struleghtn,
                          amount:Detail.struno
                    
                 };
                     break;
                     case 7:
                       dat = {
                          typeo:"Structural",
                          stypeo:"Pine 50&76 s",
                          Diameter:Detail.pinediameter,
                          leghtn:Detail.pineleghtn,
                          amount:Detail.pineno
                    
                 };
                     break;
                     case 8:
                       dat = {
                          typeo:"transmission",
                          stypeo:"transmission",
                          Diameter:Detail.diameter,
                          leghtn:Detail.leghtn,
                          amount:Detail.no
                    
                 };
                     break;
                      default:
                      alert('this case just broke!! contact the developer avax.24@gmail.com');
                      break;
                 }
               
                
                  // dataprocess.datapool(dat);
                  
                   nxt.push(dat);
                   $scope.Detail = '';
                   $scope.Details = nxt;
             };
             
             $scope.rest = function(){
               
               
             };
             
             $scope.sendemail = function(){
                 
                 var transporter = {};
                 transporter.usex = user;
                 transporter.detail = nxt;
               $http({
                method: 'POST',
                url: '/assets/api/mail.php',
                data: { userd: user, details:nxt},  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
              })
                .success(function (data) {
                    console.log(data);

                    if (!data.success) {
                        // if not successful, bind errors to error variables
                        $scope.errorName = "your order hasnt been sent, please retry sending or refresh the page and send again !";
                    } 
                    else {
                        // if successful, bind success message to message
                        $scope.message = "your order has been submitted, we will contact your for further procedure";
                    
                    }
                });
             };
                                 }])
    .controller('logController',['$scope','$http',
               function ($scope, $http) 
								 {
								 
                   	$scope.Detail = {};
                       
       				$scope.electri = [
                           {pic:'../assets/images/log4.jpe', name:'Transformers'},
                           {pic:'../assets/images/log2.jpe', name:'wires'},
                           {pic:'../assets/images/log3.jpe',name:'conductors'}
                           ];
					
		
	       
                   
               }])
    
    
    .controller('HotelController',['$scope', '$http','$interval', function ($scope, $http,$interval) {
       
        
        $scope.hotelservice = [
              {cssclas:'fa fa-shield' , name:'Secure'},
              {cssclas:'fa fa-bed' , name:'Bed and Breakfast'},
              {cssclas:'fa fa-beer' , name:'Bar'},
              {cssclas:'fa fa-tv' , name:'Lounge'},
              {cssclas:'fa fa-fire' , name:'Hot springs'},
              {cssclas:'fa fa-btc' , name:'Affordable'}    
        ];
        $scope.work = [
            {text:'The  Garden', small:'Fresh air with cool breeze',pic:'DSC_0546.jpg'},
            {text:'', small:'',pic:'IMG_0611.jpg'},
            {text:'The small confrence room',small:'For small meetings',pic:'IMG_0660.jpg'},
            {text:'The Reciption',small:'Where all things starts',pic:'DSC_0529.jpg'},
            {text:'The Bar ',small:'The happy place',pic:'IMG_0090.jpg'},
            {text:'The Room',small:'One of the rooms',pic:'IMG_0113.jpg'}];
            
        var backgroundurl = [{id:1, url:'DSC_0522.jpg'},
                    {id:2, url:'DSC_0529.jpg'},
                    {id:3, url:'DSC_0545.jpg'},
                    {id:4, url:'IMG_0660.jpg'},
                    {id:5, url:'IMG_0093.jpg'},
                    {id:6, url:'IMG_0116.jpg'},
                    {id:7, url:'IMG_0127.jpg'},
                    {id:8, url:'IMG_0138.jpg'},
                    {id:9, url:'IMG_0135.jpg'},
                    {id:10, url:'IMG_0139.jpg'},
                   ];
                  var count = 0;  
          var timer =  $interval(function () {
            count++;
            if(count >10)
            {
                count = 1 ;
            }
             
             var value = _.findWhere(backgroundurl,{id:count});
             var listvalue = _.pick(value,'url');
             var urldat = _.values(listvalue);
             $scope.pic = listvalue;
           },8400);
       
    }])
    .controller('ContactController',['$scope', '$http', function ($scope, $http) {
        
        var dat = {},
            nxt = [];
        
        $scope.sendmessage = function(detail){
            dat = {
                name:detail.name,
                email:detail.email,
                mobile:detail.mobile,
                subject:detail.subject,
                message:detail.message
            }
            if(dat.legnth = 0)
            {
                return;
            }
            nxt.push(dat);
             $http({
                method: 'POST',
                url: '/assets/api/contact.php',
                data: {data:nxt},  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
              })
                .success(function (data) {
                    console.log(data);

                    if (!data.success) {
                        // if not successful, bind errors to error variables
                        $scope.errorName = "!";
                       
                    } 
                    else {
                        // if successful, bind success message to message
                        $scope.message = "your queries have been submitted, you will hear from us soon ";
                    
                    }
                });
        };
        
    }])
    .controller('SunflowerController',['$scope', '$http','$interval', function($scope, $http,$interval){
         $scope.sunflower = [
              {cssclas:'fa fa-unlink' , name:'No Chemical Extraction'},
              {cssclas:'fa fa-reorder' , name:'6 Layers Of Refining'},
              {cssclas:'fa fa-tint' , name:'Zero Cholesterol'},
              {cssclas:'fa fa-hourglass-o' , name:'Odour Free'},
              {cssclas:'fa fa-leaf' , name:'natural and healthy'},
              {cssclas:'fa fa-gbp' , name:'rich in vitamin e'},
              {cssclas:'fa fa-barcode' , name:'food stays fresh and longer'},
              {cssclas:'fa fa-send-o' , name:'light in flavour'}];
              
              var backgroundurl = [{id:1, url:'SAM_3229.jpg'},
                    {id:2, url:'SAM_3215.jpg'},
                    {id:3, url:'SAM_3212.jpg'},
                    {id:4, url:'SAM_3218.jpg'},
                    {id:5, url:'SAM_3223.jpg'},
                    {id:6, url:'SAM_3228.jpg'}
                   ];
             var count = 0;  
             var timer =  $interval(function () {
             count++;
            if(count >6)
            {
                count = 1 ;
            }
             
             var value = _.findWhere(backgroundurl,{id:count});
             var listvalue = _.pick(value,'url');
             $scope.pic = listvalue;
           },8400);
              
    }]) .controller('TakeController',['$scope', '$http', function($scope, $http){
    }])
     .controller('ExportController',['$scope', '$http', function($scope, $http){
       
       
     }]);