var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// var FilterGridApp = require('FilterGridApp');
var GridApp = require('GridApp');

//Load foundation
$(document).foundation();

//App class
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <GridApp/>,
  document.getElementById('app')
);
