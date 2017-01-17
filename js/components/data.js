var React = require('react');

var connect = require('react-redux').connect;
var actions = require('../actions/index');

var TitleList = React.createClass({
 
 
  render: function() { 
    //console.log(this.props.items)
    
    var imgs = this.props.items.map(function(item, i) {
        if(i<5) {
          var thumnails = item.snippet.thumbnails.medium.url;
          var videoId = 'https://www.youtube.com/watch?v='+item.id.videoId;
          
          return <div key = {i}> <a><img src = {thumnails} /></a> </div>

        };
    })
    
    return(
      <div>
        <h1>{this.props.title}</h1>
        <div className="TitleList">
          {imgs}
        </div>

      </div>
    )  
   
  }
});


function mapStateToProps(state) {
  return {
    items: state.items,
    //items是state object里的 而不是items = state
  }
}
var Container = connect(mapStateToProps)(TitleList);
//container pass state to component;
//export default connect(mapStateToProps)(App)

module.exports = Container;




