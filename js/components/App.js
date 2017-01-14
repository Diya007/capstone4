var React = require('react');


//var connect = require('react-redux').connect;
var actions = require('../actions/index');

var TitleList = require('./list');
var Hero = require('./hero');
var Logo = require('./Logo');



var App = React.createClass({
  
  
  fetchTerm: function(event){
    event.preventDefault()
    console.log('hi')
    var requestTerm= this.refs.requestTerm.value;
      
    //return requestTerm;
   
  },

  render: function() {
    console.log(this);
    return (
   
      <div>
        <header className="Header">
        <Logo />  

        <div id="search" className="Search">
            <input  type="text" placeholder="Search for a title..." ref='requestTerm' />
            <button type ="button" onClick ={this.fetchTerm}>
                Enter
            </button>
        </div> 

        </header>

        <Hero />
        <TitleList title="Search Results" term={this.requestTerm} />
      </div>


    );
  }

});



module.exports = App;
