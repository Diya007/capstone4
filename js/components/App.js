var React = require('react');

var Hero = require('./hero');
var Logo = require('./Logo');


var App = React.createClass({
  
  getInitialState: function() {
    return {searchTerm:"", searchUrl:""};
  },
  handleKeyUp :function(e){
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      var searchUrl = "http://trailersapi.com/trailers.json?movie=" + this.state.searchTerm + '&limit=5&width=320';
      this.setState({searchUrl:searchUrl});
    }
  },

  handleChange : function(e){
      this.setState({searchTerm : e.target.value});    
  },
  render: function() {
    return (
      <div>
        <header className="Header">
          <Logo />
         
          <div id="search" className="Search">
            <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a title..." value={this.state.searchTerm}/>

          </div>
           
        </header>
        <Hero />
        
      </div>
    );
  }

});




module.exports = App;
