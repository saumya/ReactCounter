//
// UserInput.react.js
//
var React = require ('react');
var FluxCountActions = require('../actions/FluxCountActions');

var UserInputView = React.createClass({
	incrementCount:function(dataObj){
		console.log('UserInputView:incrementCount:dataObj:',dataObj);
		console.log('UserInputView:incrementCount:this.props.today:',this.props.todayToSave);
		//addCount
		FluxCountActions.addCount(this.props.todayToSave);
	},
	render:function(){
		var self = this;
		return (
			<div>
				{this.props.todayToShow}
				<button type="button" className="addCount" onClick={self.incrementCount.bind(self, this.props.todayToSave)}> Add </button>
			</div>
		);
	}
});
module.exports = UserInputView;