var senalax.check = function() {
	fetch("http://senalax.local/exists.txt", { method: 'POST', body: form })
		.then(function (response) {
		return response.text();
	})
	.then(function (result) {
		if(result == "1") {
			senalax.exists = true;
		} else {
			senalax.exists = false;
		}
}
