//
var React = require('react');
var ReactDOM = require('react-dom');
//
var ApplicationControllerView = React.createClass({
	render:function(){
		return (
			<div>
				<header>{this.props.header}</header>
			</div>
		);
	}
});
//
module.exports = ApplicationControllerView;