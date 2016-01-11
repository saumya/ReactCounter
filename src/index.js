// Application entry
var React = require('react');
var ReactDOM = require('react-dom');
var ApplicationControllerView = require('./components/ApplicationControllerView.react');
// Render the application
ReactDOM.render(
	<div>
		<div>Ract</div>
		<ApplicationControllerView></ApplicationControllerView>
	</div>
	,document.getElementById('reactApp')
);
