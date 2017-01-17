var React = require('react');

var connect = require('react-redux').connect;
var actions = require('../actions/index');
var TitleList = require('./list');
var Hero = require('./hero');
var Logo = require('./Logo');


var App = React.createClass({


  fetchTerm: function(){
    var requestTerm = this.refs.requestTerm.value;
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

        <div id="enter">

          <button id="enter" type ="button" onClick ={this.fetchTerm} > Enter </button>

        </div>
      
        </header>
        <Hero />
        
        <TitleList title="Search Results" term={''} />
        <TitleList title="Comedy" term={'comedy'} />
        <TitleList title="horror" term={'horror'} />

      </div>

    );
  }

});

var Container = connect()(App)


module.exports = Container;
