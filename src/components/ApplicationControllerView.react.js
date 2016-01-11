//
var React = require('react');
var ReactDOM = require('react-dom');
var UserInputView = require('./UserInputView.react'); 

var CountStore = require('../stores/CountStore');
//
function getCountState(){
	console.log('ApplicationControllerView : getCountState :');
	return ({
		count : CountStore.getCounts()
	});
}

//
// props : owned by parent component
// state : owned by component itself and its private to the component itself
//
var ApplicationControllerView = React.createClass({
	getInitialState: function(){
		console.log('ApplicationControllerView : getInitialState :');
		var a = getCountState();
		return ({
			totalCount:0,
			counts:a
		});
	},
	componentDidMount: function(){
		console.log('ApplicationControllerView : componentDidMount :');
		CountStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function(){
		console.log('ApplicationControllerView : componentWillUnmount :');
		CountStore.removeChangeListener(this._onChange);
	},
	render:function(){
		//
		console.log('ApplicationControllerView : render :');
		console.log('ApplicationControllerView : render : counts :',this.state.counts);
		console.log('ApplicationControllerView : render : totalCount :',this.state.totalCount);
		//
		var today = new Date();
		var todayFormated = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
		return (
			<div>
				<header>{this.props.header} Total: {this.state.totalCount}</header>
				<div>
					<UserInputView today={todayFormated} />
					<ul>
						<li>{todayFormated}</li>
						<li>{todayFormated}</li>
						<li>{todayFormated}</li>
					</ul>
				</div>
				<footer>The counter has reached End.</footer>
			</div>
		);
	},
	//
	_onChange: function(){
		console.log('ApplicationControllerView : _onChange :');
		this.setState(getCountState());
	}
});
//
module.exports = ApplicationControllerView;