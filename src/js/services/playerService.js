var PlayerService = function($http){

	var data = require('../data');

    this.getData = function(){

        return data.teams;
    }

};


module.exports = PlayerService;