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
				<p>
					Today : <span className="today">{this.props.todayToShow}</span>
					<button type="button" className="addCount" onClick={self.incrementCount.bind(self, this.props.todayToSave)}> Add </button>
				</p>
			</div>
		);
	}
});
module.exports = UserInputView;