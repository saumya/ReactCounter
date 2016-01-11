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
		console.group('FluxCountActions : addCount');
		console.log('FluxCountActions : FluxCountConstants :',FluxCountConstants);
		console.log('FluxCountActions : addCount :',FluxCountConstants.COUNTER_ADD);
		console.groupEnd();
		AppDispatcher.handleAction({
			actionType: FluxCountConstants.COUNTER_ADD,
			data:data
		});
	}
};
//
module.exports = FluxCountActions;