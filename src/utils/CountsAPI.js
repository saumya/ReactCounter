//
var FluxCountActions = require('../actions/FluxCountActions');
var CountsAPI = {
	// Load mock product data from localStorage into ProductStore via Action
  getCountData: function() {
  	console.log('CountsAPI : getCountData :');
    var data = JSON.parse(localStorage.getItem('countData'));
    FluxCountActions.recieveCounts(data);
  },
  clearData: function(){
    //debugger;
    console.log('CountsAPI : clearData : ');
    //localStorage.clear();
    var data = JSON.parse(localStorage.getItem('countData'));
    var _counts = data[0];
    _counts.days = []; // initialise the Array again
    localStorage.setItem('countData',JSON.stringify(data));
    // Get the data again. This is a Fake API, so Fake Everything.
    //this.getCountData();
    //FluxCountActions.onClearCounts();
  },
  setCountData: function(newData){
    var data = JSON.parse(localStorage.getItem('countData'));
    var _counts = data[0];
    //var days = _counts.days;
    _counts.days = newData; // Just set the new Array

    //console.log(data);
    //var s = JSON.stringify(n);
    //console.log(_counts.days);
    //console.log(n);
    //

    localStorage.setItem('countData',JSON.stringify(data));
  }
};
module.exports = CountsAPI;
