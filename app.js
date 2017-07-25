'use strict';

const myApp = angular.module('app', []);

myApp.controller("MessageController", function($scope) {
    $scope.message = "hello, world";
});

myApp.controller("CountController", function($scope) {
    $scope.count = () => 12;
});

myApp.controller("NameController", function($scope) {
    $scope.name = "Jackass";
});

myApp.controller("SecondNameController", function($scope) {
    $scope.name = "David";
    $scope.wow = "parent controller gave me this";
});

myApp.controller("TodoController", function($scope) {
    $scope.todos = [
        { name: "Master HTML/css/JS", completed: true },
        { name: "Get started ExpressJS", completed: false },
        { name: "Learn AngularJS", completed: false },
        { name: "Be Awesome!", completed: true },

    ];
});

myApp.value("score", { points: 10 });

myApp.factory("SongFactory", function($q, $http) {
    
         let getSongs = () => {
          return $q( (resolve, reject) => {
            $http.get(`./songs.json`)
                .then( (songs) => {
                    resolve(songs);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    return { getSongs };
});

myApp.controller("SongController", function($scope, SongFactory) {
	SongFactory.getSongs()
	.then( (songData) => {
		$scope.songList = songData.data.songs;
	});
});

myApp.controller('ScoreController', function($scope, score) {
    $scope.scoreCount = score.points;
});