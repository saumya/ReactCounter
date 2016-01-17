//
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCountConstants = require('../constants/FluxCountConstants');
var _ = require('underscore');
//
var CountsAPI = require('../utils/CountsAPI');
//
var _counts = {}, _selected = {};
//
function loadCountData(data){
	console.log('CountStore : loadCountData : data:',data);
	_counts = data[0];
}
function _addCount(newDay){
	//debugger;
	console.log('CountStore : _addCount : data:',newDay);
	console.log('CountStore : _addCount :',_counts['days']);
	
	var newData = {cDate: newDay};
	//_counts['days'] = _.extend({},_counts['days'],newData);
	_counts.days.push(newData);

	console.log('CountStore : _addCount :',_counts['days']);
	console.log('==========================================');
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
	console.log('CountStore : AppDispatcher.register : payload:',payload);
	var action = payload.action;
	var text;
	console.log('CountStore : AppDispatcher.register : actionType:'+action.actionType);
	switch(action.actionType){
		case FluxCountConstants.RECEIVE_DATA:
			loadCountData(action.data);
		break;
		case FluxCountConstants.COUNTER_ADD:
			console.group('CountStore : AppDispatcher.register : FluxCountConstants.COUNTER_ADD');
			console.log('FluxCountConstants.COUNTER_ADD');
			console.log('TODO : implement this case');
			console.groupEnd();
			//
			_addCount(action.data);
		break;
		case FluxCountConstants.COUNTER_CLEAR:
			console.log('CountStore : AppDispatcher.register : FluxCountConstants.COUNTER_CLEAR');
			CountsAPI.clearData();
		break;
		default:
			return true;
	}
	console.log('CountStore : AppDispatcher.register : just before emitChange');
	CountStore.emitChange();
	return true;
});
//
module.exports = CountStore;