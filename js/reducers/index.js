var combineReducers = require('redux').combineReducers;
var actions = require('../actions/index');

var resultsReducer = function(state = [], action) {
	switch (action.type) {
		case 'FETCH_YOUTUBE_SUCCESS':
			return action.items;
		default:
			return state;
	}
}


exports.resultsReducer = combineReducers({
	items: resultsReducer
});
