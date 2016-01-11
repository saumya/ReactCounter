// Application entry
'use strict';
(function(){
	// load CSS and make style from it and add the style to the page
	require("style!css!../css/general.css");
	//
	var React = require('react');
	var ReactDOM = require('react-dom');
	var ApplicationControllerView = require('./components/ApplicationControllerView.react');
	// Load the dummy data
	var CountsData = require('./data/CountsData');
	CountsData.init();
	// Render the application
	ReactDOM.render(
		<div>
			<div>Ract</div>
			<ApplicationControllerView header='Count'></ApplicationControllerView>
		</div>
		,document.getElementById('reactApp')
	);	
})();

