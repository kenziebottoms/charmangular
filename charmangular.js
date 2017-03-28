var app = angular.module('myApp', ['ngResource']);

app.factory("Post", ['$resource', function($resource) {
    return $resource("http://pokeapi.co/api/v2/pokemon/:id");
}]);

app.controller("PostIndexCtrl", function($scope, Post) {
    $scope.getPokemonByID = function() {
        post = Post.get({ id : $scope.id }, function(data) {
            $scope.content = '';
            $scope.content += data['name'] + '<br/>';
            $scope.content += '<img src="' + data['sprites']['front_shiny'] + '" />';
        });
    }
});