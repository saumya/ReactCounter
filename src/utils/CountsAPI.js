//
var FluxCountActions = require('../actions/FluxCountActions');
var CountsAPI = {
	// Load mock product data from localStorage into ProductStore via Action
  getCountData: function() {
    var data = JSON.parse(localStorage.getItem('countData'));
    FluxCountActions.recieveCounts(data);
  }
};
module.exports = CountsAPI;