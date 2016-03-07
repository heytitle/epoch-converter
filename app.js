var app = angular.module('mainApp', [])

app.controller('MainController', function($scope) {
    $scope.list = [
        'Asia/Bangkok',
        'Europe/Amsterdam'
    ];

    $scope.moment   = moment;
    $scope.parseInt = window.parseInt;

});

