var FETCH_LIST_SUCESS = 'FETCH_LIST_SUCESS';
var FETCH_LIST_ERROR = 'FETCH_LIST_ERROR';

var fetchListSuccess = function(requestUrl, list) {
	return {
		type: FETCH_LIST_SUCESS,
		requestUrl: requestUrl,
		list: list
	}
}

var fetchListError = function(requestUrl, error) {
	return {
		type: FETCH_LIST_ERROR,
		requestUrl: requestUrl,
		error: error
	}
}

var fetchList = function(requestUrl) {
	return function(dispatch) {
		
	}
}