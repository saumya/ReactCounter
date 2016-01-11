// 
var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCountConstants = require('../constants/FluxCountConstants');
//
var FluxCountActions = {
	// Receive initial count data
	recieveCounts: function(data){
		console.log('FluxCountActions : recieveCounts :');
		AppDispatcher.handleAction({
			actionType: FluxCountConstants.RECEIVE_DATA,
			data: data
		});
	},
	addCount: function(data){
		AppDispatcher.handleAction({
			actionType: FluxCountActions.COUNTER_ADD,
			data:data
		});
	}
};
//
module.exports = FluxCountActions;