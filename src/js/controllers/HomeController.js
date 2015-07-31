
var Teams = function($scope, PlayerService) {

    $scope.teams = PlayerService.getTeams();
    $scope.positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'];
    $scope.players = PlayerService.getPlayers();
    $scope.currentPlayer = $scope.players[0];

    $scope.handlePlayerChange = function(){

    	$scope.currentPlayer = this.player;

    }

};

module.exports = Teams;  