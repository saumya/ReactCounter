//
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCountConstants = require('../constants/FluxCountConstants');
var _ = require('underscore');
//
var _counts = {}, _selected = {};
//
function loadCountData(data){
	_counts = data[0];
}
// CountStore
var CountStore = _.extend({},EventEmitter.prototype,{
	getCounts : function(){
		return _counts;
	},
	emitChange: function(){
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
	var action = payload.action;
	var text;
	switch(action.actionType){
		case FluxCountConstants.RECEIVE_DATA:
			loadCountData(action.data);
		break;
		default:
			return true;
	}
	CountStore.emitChange();
	return true;
});
//
module.exports = CountStore;