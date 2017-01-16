var React = require('react');

var connect = require('react-redux').connect;
var actions = require('../actions/index');
var TitleList = require('./list');
var Hero = require('./hero');
var Logo = require('./Logo');


var App = React.createClass({


  fetchTerm: function(){
    var requestTerm = this.refs.requestTerm.value;
    //this.setState({requestTerm: requestTerm});
    this.props.dispatch(actions.fetchResults(requestTerm));
    
  },


  render: function() {

    return (
      
      <div> 
        <header className="Header">
        <Logo />  
        <div id="search" className="Search">
            <input  type="text" placeholder="Search for a title..." ref="requestTerm" />
        </div> 

        <button type ="button" onClick ={this.fetchTerm}>
                Enter
        </button>
      
        </header>
        
        <TitleList title="Search Results"  />
      </div>

    );
  }

});

var Container = connect()(App)


module.exports = Container;
