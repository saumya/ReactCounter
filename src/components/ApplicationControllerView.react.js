//
var React = require('react');
var ReactDOM = require('react-dom');
var UserInputView = require('./UserInputView.react'); 

var CountStore = require('../stores/CountStore');
//
function getCountState(){
	console.log('ApplicationControllerView : getCountState :');
	var dataObj = CountStore.getCounts();
	var b = dataObj.days.length;
	return ({
		totalCount : b,
		counts : dataObj
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
		return a;
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
		//console.log('ApplicationControllerView : render :');
		console.log('ApplicationControllerView : render : counts :',this.state.counts);
		//console.log('ApplicationControllerView : render : totalCount :',this.state.totalCount);
		//console.log('ApplicationControllerView : render : days :',this.state.counts.days);
		//
		var today = new Date();
		var todayFormated = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
		//
		var countedDays = this.state.counts.days;
		//
		return (
			<div>
				<header>{this.props.header} {this.state.totalCount}</header>
				<div>
					<UserInputView today={todayFormated} />
					<ul>
						{Object.keys(countedDays).map(function(dayIndex){
							//console.log('dayIndex',dayIndex);
							return(
								<li key={dayIndex}>
									<h3 className="cName">{countedDays[dayIndex].cDate}</h3>
								</li>
							)
						})}
					</ul>
				</div>
				<footer> <h3>Total : {this.state.totalCount}</h3> </footer>
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