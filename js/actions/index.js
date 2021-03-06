require('isomorphic-fetch');

var fetchResults = function(term) {
	return function(dispatch) {
		var apiKey = 'AIzaSyBlpPh_6snu64y_Q2O7OAubiS2DSM1hWZY';
		var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+term+'trailer&key='+apiKey;
		console.log(url);
		return fetch(url).then(function(response) {
			if(response.status <200 || response.status >=300) {
				var error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response;
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			var items = data.items;
			dispatch({type: 'FETCH_YOUTUBE_SUCCESS', items:items});

		})
		.catch(function(err) {

			console.log('there has been an error');
			console.log(err)

		})
	
	}
	

}

exports.fetchResults = fetchResults;