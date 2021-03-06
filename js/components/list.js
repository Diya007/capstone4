var React = require('react');

var connect = require('react-redux').connect;
var actions = require('../actions/index');

var TitleList = React.createClass({
 
  loadContent: function() {
    this.props.dispatch(actions.fetchResults(this.props.term));
  },
  
  componentDidMount: function() {
    this.loadContent();
  },

  render: function() { 
    
    var imgs = this.props.items.map(function(item, i) {
        if(i<5) {
          var backDrop = item.snippet.thumbnails.high.url;
          var videoId = 'https://www.youtube.com/watch?v='+item.id.videoId;
          var name = item.snippet.title;
          var overview = item.snippet.description;

          //return <div key = {i}> <a href = {videoId} target="_blank"><img src = {backDrop} /></a> </div>

          return  <a href = {videoId} target="_blank"> <Item key = {i}  title={name} overview={overview} backdrop={backDrop} /> </a> 
          
        };
    })
    
    return(
      <div ref="titlecategory" className="TitleList">
        <div className="Title">
          <h2>{this.props.title}</h2>
          <div className="titles-wrapper">
            {imgs}
          </div>
        </div>
      </div>
    )  
   
  }
});


var Item = React.createClass({
  render: function() {
    return (
      <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}} >
        <div className="overlay">
          <div className="title">{this.props.title}</div>
          <div className="plot">{this.props.overview}</div>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}
var Container = connect(mapStateToProps)(TitleList);


module.exports = Container;



