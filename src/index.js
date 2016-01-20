// Application entry
'use strict';
(function(){
	// load CSS and make style from it and add the style to the page
	require("style!css!../css/general.css");
	//
	var React = require('react');
	var ReactDOM = require('react-dom');
	//
	var ApplicationControllerView = require('./components/ApplicationControllerView.react');
	var CountsAPI = require('./utils/CountsAPI');
	// Load the Mock data
	var CountsData = require('./data/CountsData');
	CountsData.init();
	// Call Mock API
	CountsAPI.getCountData();
	// Render the application
	ReactDOM.render(
		<div>
			<ApplicationControllerView header='Day Count'></ApplicationControllerView>
		</div>
		,document.getElementById('reactApp')
	);
})();
