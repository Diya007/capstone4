var React = require('react');

var connect = require('react-redux').connect;
var actions = require('../actions/index');

var TitleList = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(actions.fetchResults(this.props.term));
    //term = this.props.term;
    //state就变成了根据home alone而找到的items array;
  },
  render: function() { 
    console.log(this.props.items)
    return (
      <div>
        <h1>{this.props.title}</h1>

        {this.props.items.map(function(item, i) {
          var img = "";
          if(i<5) {
            var thumnails = item.snippet.thumnails.default.url;
            var videoId = 'https://www.youtube.com/watch?v='+item.id.videoId;
            <div> {img ='<a href='+videoId +'><img src ='+thumnails+'></a>'}</div>

          };
        })} 
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
//export default connect(mapStateToProps)(App)

module.exports = Container;



