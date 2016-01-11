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
		var today = new Date();
		var todayFormated = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
		return (
			<div>
				<header>{this.props.header}</header>
				<div>
					<ul>
						<li>{todayFormated}</li>
						<li>{todayFormated}</li>
						<li>{todayFormated}</li>
					</ul>
				</div>
				<footer>{this.state.totalCount}</footer>
			</div>
		);
	}
});
//
module.exports = ApplicationControllerView;