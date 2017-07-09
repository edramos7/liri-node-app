var keys = require(keys.js)

var consumer_key = keys.twitterkeys.consumer_key;
var consumer_secret = keys.twitterkeys.consumer_secret;
var access_token_key = keys.twitterkeys.access_token_key;
var access_token_secret = keys.twitterkeys.access_token_secret;

var Twitter = require('twitter');

var client = new Twitter({
	consumer_key: consumer_key,
	consumer_secret: consumer_secret,
	access_token_key: access_token_key,
	access_token_secret: access_token_secret,
});

var spotify = require('spotify');
var request = require('request');
var fs = require('fs');

if(process.argv[2] == "do-what-it-says"){
	fs.readFile(random.txt, "utf8", function(err, data){
		var dataArr = data.split(', ');
		picker(dataArr[0]), dataArr[1];
	});
}
else {
	picker(process.argv[2], process.argv[3]);
}

function picker (command, name) {
	switch(command){
		case 'my-tweets':
		client.get('statuses/user_timeline', {count: 20}, function (errors, tweets, response){
			for (i=0; i<tweets.length; i++) {
				console.log(tweets[i].text);
				fs.appendFile('log.txt', tweets[i].text + '\n', function(err){});
			
			}
		});
		fs.appendFile('log.txt', '\n-----------------\n\n', function(err) {}});
		break;
		case 'spotify-this-song':
	}
}