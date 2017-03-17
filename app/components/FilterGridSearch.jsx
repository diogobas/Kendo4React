var React = require('react');

var FilterGridSearch = React.createClass({
  handleSearch: function () {
    var searchText = this.refs.searchText.value;

    this.props.onSearch(searchText);
  },
  render: function () {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Omni Search" onChange={this.handleSearch} />
        </div>
      </div>
    );
  }
});

module.exports = FilterGridSearch;
