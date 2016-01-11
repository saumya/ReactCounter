//
var dataObj = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('counts', JSON.stringify([
      {
        id: '0011001',
        name: 'Counter',
        image: 'scotch-beer.png',
        description: 'The number of days, when thing is delivered.',
        days: [
          {
            cDate : '7-1-2016'
          },
          {
            cDate : '8-1-2016'
          },
          {
            cDate : '11-1-2016'
          }
        ]
      }
    ]));
  }

};
module.exports = dataObj;

