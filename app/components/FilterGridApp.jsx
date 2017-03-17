var React = require('react');

var FilterKendoGrid = require('FilterKendoGrid');
var FilterGridSearch = require('FilterGridSearch');

var FilterGridApp = React.createClass({
  getInitialState: function () {
    return {
      searchText: ''
    };
  },
  handleSearch: function (searchText) {
    this.setState({
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {searchText} = this.state;

    return (
      <div>
        <div className="row">
          <h3 className="page-title">Kendo Grid Filter</h3>
          <div>
            <div className="container">
              <FilterGridSearch onSearch={this.handleSearch}/>
              <FilterKendoGrid people={searchText} />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = FilterGridApp;
