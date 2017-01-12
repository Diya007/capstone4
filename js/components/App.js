var React = require('react');

var connect = require('react-redux').connect;
var actions = require('../actions/index');

var Hero = require('./hero');
var Logo = require('./Logo');
var TitleList = require('./list');


var App = React.createClass({
  handleKeyUp :function(e){
    if (e.key === 'Enter' && this.state.searchTerm !== '') {

      var requestTerm= this.refs.requestTerm.value;
      console.log(requestTerm);
      return requestTerm;

    }
  },

  handleChange : function(e){
      this.setState({searchTerm : e.target.value});   
      //e.target.value = the value of what you type; 
  },
  render: function() {
    return (
      <div>
        <header className="Header">
          <Logo />
         
          <div id="search" className="Search">
            <input onKeyUp={this.handleKeyUp} type="search" placeholder="Search for a title..." ref='requestTerm'/>
          </div>
           
        </header>
        <Hero />
        <TitleList title="Search Results" term={this.requestTerm} />
        
      </div>
    );
  }

});


var Container = connect()(TitleList);

module.exports = Container;
