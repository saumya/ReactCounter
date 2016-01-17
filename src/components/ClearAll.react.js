//
var React = require('react');
var FluxCountActions = require('../actions/FluxCountActions');
//
var ClearAll = React.createClass({
	getInitialState: function(){
		console.log('ClearAll : getInitialState :');
		return ({
			totalCount:0
		});
	},
	clearCount:function(){
		console.log('ClearAll:clearCount:');
		FluxCountActions.clearCounts();
	},
	render: function(){
		self = this;
		return (
			<div>
				{this.props.header} <span> {this.props.totalCount} </span>
				<button type="button" className="button-xsmall button-error pure-button" onClick={self.clearCount.bind(self,null)}> Clear </button>
			</div>
		);
	}
});
//
module.exports = ClearAll;
