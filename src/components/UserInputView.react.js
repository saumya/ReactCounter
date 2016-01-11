//
// UserInput.react.js
//
var React = require ('react');
var UserInputView = React.createClass({
	render:function(){
		return (
			<div>
				{this.props.today}
				<span>
					<button>Count Today</button>
				</span>
			</div>
		);
	}
});
module.exports = UserInputView;