//
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCountConstants = require('../constants/FluxCountConstants');
var _ = require('underscore');
//
var _counts = {}, _selected = {};
//
function loadCountData(data){
	console.log('CountStore:loadCountData:',data);
	_counts = data[0];
}
// CountStore
var CountStore = _.extend({},EventEmitter.prototype,{
	getCounts : function(){
		console.log('CountStore:getCounts:');
		return _counts;
	},
	emitChange: function(){
		console.log('CountStore:emitChange:');
		this.emit('change');
	},
	addChangeListener: function(callback){
		this.on('change',callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change',callback);
	}
});
// Register callback with AppDispatcher
AppDispatcher.register(function(payload){
	console.log('payload:',payload);
	var action = payload.action;
	var text;
	console.log('CountStore : AppDispatcher.register : actionType:'+action.actionType);
	switch(action.actionType){
		case FluxCountConstants.RECEIVE_DATA:
			loadCountData(action.data);
		break;
		case FluxCountConstants.COUNTER_ADD:
			console.log('FluxCountConstants.COUNTER_ADD');
			console.log('TODO: implement this case');
		break;
		default:
			return true;
	}
	CountStore.emitChange();
	return true;
});
//
module.exports = CountStore;