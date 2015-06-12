var mongo = require("mongodb");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db("nodejs-introduction", new mongoServer(host, port, {}));
db.open(function(error){
	console.log("We are connected! "+ host + ":" + port);

	db.collection("user", function(error, collection){
		console.log("We have the collection");
		collection.insert({
			id: "1",
			name: "Nolawee Mengist",
			twitter: 'coc0be4n77',
			email: "nome9478@colorado.edu"
		}, function(){
			console.log("Successfully inserted Nolawee")
		});
		collection.insert({
			id: "2",
			name: "Joe blow",
			twitter: 'coc0be4n77',
			email: "nome9478@colorado.edu"
		}, function() {
			console.log("Successfully inserted Joe")
		});

	})
});

