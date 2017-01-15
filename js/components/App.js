var React = require('react');

//var connect = require('react-redux').connect;
var actions = require('../actions/index');

var TitleList = require('./list');
var Hero = require('./hero');
var Logo = require('./Logo');



var App = React.createClass({
  getInitialState: function() {
    return {requestTerm: ""};
  },

  fetchTerm: function(){
    var requestTerm = this.refs.requestTerm.value;
    //this.props.dispatch(actions.fetchResults(requestTerm));
    this.setState({requestTerm: requestTerm});
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

        <Hero />
        <TitleList title="Search Results" term={this.state.requestTerm} />
      </div>


    );
  }

});



module.exports = App;
