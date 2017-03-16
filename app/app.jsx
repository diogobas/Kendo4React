import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var KendoGrid = require('KendoGrid');
var FilterKendoGrid = require('FilterKendoGrid');
var FilterKendoGrid = require('FilterKendoGrid');


//Load foundation
$(document).foundation();

//App class
require('style!css!sass!applicationStyles');

console.log("running");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={FilterKendoGrid}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
