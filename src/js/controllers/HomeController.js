
var Teams = function($scope, PlayerService) {
        
    $scope.teams = PlayerService.getData();

    $scope.HandleTeamChange = function(){

    	console.log(arguments);

    }

};

module.exports = Teams; 