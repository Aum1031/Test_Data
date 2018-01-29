// API
// ===

module.exports.api = function(server, fs) {

	// Sample Rest Call

	server.get('/api/getData', function(req, res) {

		fs.readFile(__dirname + '/data.json', function(err, data) {
			if (err) throw err;
			let updateData = JSON.parse(data);
		    updateData.forEach(function(element, i) {
				element['UUID'] = element["Client"] + element["LiquidityProvider"] + element['latency'] +  i;
			});
			res.send(200, updateData);
		});
	});

};
