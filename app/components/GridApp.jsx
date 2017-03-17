var React = require('react');

var KendoGridPersistState = require('KendoGridPersistState');

var GridApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row">
          <h3 className="page-title">Kendo Grid Persist State w/ ReactJS</h3>
          <div>
            <div className="container">
              <KendoGridPersistState />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = GridApp;
