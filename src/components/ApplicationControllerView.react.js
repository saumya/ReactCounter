//
var React = require('react');
var ReactDOM = require('react-dom');
//
// props : owned by parent component
// state : owned by component itself and its private to the component itself
//
var ApplicationControllerView = React.createClass({
	getInitialState: function(){
		return ({
			totalCount:0
		});
	},
	render:function(){
		return (
			<div>
				<header>{this.props.header}</header>
				<footer>{this.state.totalCount}</footer>
			</div>
		);
	}
});
//
module.exports = ApplicationControllerView;