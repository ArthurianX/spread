angular.module('spread.home',[])
    .controller('homeCtrl', function homeController($collection, $scope){

        $scope.message = "Hello from Angular home.";

        $collection(Events).bind($scope, 'events', true, true);

});
