//
// UserInput.react.js
//
var React = require ('react');
var FluxCountActions = require('../actions/FluxCountActions');

var UserInputView = React.createClass({
	addCount:function(){
		console.log('UserInputView:addCount');
	},
	incrementCount:function(dataObj){
		console.log('UserInputView:incrementCount:dataObj:',dataObj);
		console.log('UserInputView:incrementCount:this.props.today:',this.props.today);
		//addCount
		FluxCountActions.addCount(this.props.today);
	},
	render:function(){
		var self = this;
		return (
			<div>
				{this.props.today}
				<span>
					<button type="button" className="addCount" onClick={this.addCount}> + </button>
					<button type="button" className="addCount" onClick={self.incrementCount.bind(self, this.props.today)}> Add </button>
				</span>
			</div>
		);
	}
});
module.exports = UserInputView;