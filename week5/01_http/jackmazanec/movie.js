
var http  = require('http');

function getMovie(movie) {

  var request = http.get('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json', function(response) {

    var body = "";

    response.on('data', function(chunks) {
      body += chunks;

    })

    response.on('end', function() {
      if (response.statusCode === 200) {
        var movie = JSON.parse(body);
        console.log(movie.Title, movie.Year, movie.Awards);
      } else {
        console.log('there was an error');
      }

    })

  })

}

module.exports.get = getMovie;
  
