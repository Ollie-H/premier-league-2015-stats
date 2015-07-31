var _ = require('underscore');


var FlickrService = function($http){

    var imageSearch;

    this.getImage = function(player){

        return new Promise(function(resolve, reject){
            imageSearch = new google.search.ImageSearch();
            imageSearch.setSearchCompleteCallback(this, function(){
                var x = Math.floor(Math.random() * imageSearch['results'].length);
                if(imageSearch['results'][x]) resolve(imageSearch['results'][x]['unescapedUrl']);
            }, null);
            imageSearch.execute(player.name + ' ' + player.teamName);
        });
    }
};

module.exports = FlickrService; 