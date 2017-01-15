var React = require('react');

var connect = require('react-redux').connect;
var actions = require('../actions/index');

var TitleList = React.createClass({
  //this function will get state which include items in it.
  // //what does items look like? array
  // loadContent: function() {
  //   this.props.dispatch(actions.fetchResults(this.props.term));
  //   //what if this.props.term is empty
  //   //现在把prop想成一个输入
  // }，
  // componentWillReceiveProps: function(nextProps) {
  //   if(nextProps.term!==)

  // },
  componentWillMount: function() {
    //var requestTerm = this.props.term;
    //console.log(this.props.term);
    this.props.dispatch(actions.fetchResults(this.props.term));
    console.log(this.props.term)
    
  },
  render: function() { 
    //console.log(this.props.items)
    
    var imgs = this.props.items.map(function(item, i) {
        if(i<5) {
          var thumnails = item.snippet.thumbnails.default.url;
          var videoId = 'https://www.youtube.com/watch?v='+item.id.videoId;
          return <div key = {i}> {'<a><img src ='+thumnails+'></a>'}</div>

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



