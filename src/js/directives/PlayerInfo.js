var PlayerInfo = function(FlickrService) {

	function updateImage($scope){
		FlickrService.getImage($scope.player).then(function(src){
			$scope.player.image = src;
			$scope.$apply();
		});
	}

	return {
		restrict: 'A',
		scope: {
			player: '='
		},
		templateUrl: 'src/js/partials/directives/playerInfo.html',
		controller: function($scope){

			$scope.player.ratingPercent = 0;

			setTimeout(function(){
				$scope.player.ratingPercent = Math.ceil(($scope.player.rating/10)*100);
				$scope.$apply();
			}, 300);

			updateImage($scope);
			$scope.$watch('player', function(newValue, oldValue) {
				$scope.player.ratingPercent = Math.ceil(($scope.player.rating/10)*100);
		 		updateImage($scope);
			});
		}
	}

};

module.exports = PlayerInfo;