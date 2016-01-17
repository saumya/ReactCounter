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
				{this.props.header} {this.state.totalCount} 
				<button type="button" className="clearCount" onClick={self.clearCount.bind(self,null)}> Clear All </button>
			</div>
		);
	}
});
//
module.exports = ClearAll;