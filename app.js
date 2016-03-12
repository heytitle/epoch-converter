var app = angular.module('mainApp', ['LocalStorageModule'])

app.controller('MainController', function($scope, localStorageService ) {

    var list = localStorageService.get('tz-list');
    if( !list || list.length == 0 ){
        list = [
            'Asia/Bangkok',
            'Europe/Amsterdam'
        ];
    }
    console.log(list );
    $scope.list     = list;
    $scope.moment   = moment;
    $scope.parseInt = window.parseInt;

    $scope.tz = moment.tz.names();

    $scope.addTimeZone = function(){
        var tz = $scope.tz_selector;
        $scope.list.push(tz);
        $scope.tz_selector = "none";
        localStorageService.set('tz-list', $scope.list );
    };

    $scope.remove = function(index){
        $scope.list.splice(index, 1);
        localStorageService.set('tz-list', $scope.list );
    };

});

