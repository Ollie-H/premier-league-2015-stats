var _ = require('underscore');

var PlayerService = function($http){

	var data = require('../data');

    this.getTeams = function(){

        return _.map(data.teams, function(team){
        	return _.omit(team, 'players');
        });
    }

    this.getPlayers = function(){

    	var players = [];

    	_.each(data.teams, function(team){
    		_.each(team.players, function(player){
    			players.push(_.extend(player, {teamId: team.id, teamName: team.name }));
    		})
    	});

    	return players;
    } 
};

module.exports = PlayerService;