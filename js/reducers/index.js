var combineReducers = require('redux').combineReducers;
var actions = require('../actions/index');

//var initialResultsState = [];

//var initialResultsState = {data: [], mounted: false};
var resultsReducer = function(state = [], action) {
	switch (action.type) {
		case 'FETCH_YOUTUBE_SUCCESS':
			return action.items;
		default:
			return state;
	}
}
// 1. line 8, object.assign({})

// var resultsReducer = function(state, action) {
// 	state = state || initialResultsState;
// 	if(action.type === actions.FETCH_RESULTS_SUCCESS) {
// 		return state.concat(ation.items);

// 	}

// 	return state;

// }

exports.resultsReducer = combineReducers({
	items: resultsReducer
});

//exports.resultsReducer = resultsReducer;