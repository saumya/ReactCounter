//
var CountsData = {
  // Load Mock Product Data Into localStorage
  init: function() {
    // Check whether data already exists !
    //localStorage.clear();
    var a = localStorage.getItem('countData');
    if (a === null) {
      // Save some dummy data
      localStorage.setItem('countData', JSON.stringify([
        {
          id: '0011001',
          name: 'Counter',
          image: 'logo.png',
          description: 'The number of days, when thing is delivered.',
          days: [ { cDate : '7-1-2016' },{ cDate : '8-1-2016' },{ cDate : '11-1-2016' } ]
        }
      ]));
    }else {
      // Do NOthing
    }
  }
};
module.exports = CountsData;
