import React, { Component } from 'react';

class KendoGridPersistState extends Component {

    componentDidMount() {

      $("#KendoDiv").kendoGrid({
        dataSource: {
            type: "odata",
            transport: {
                read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
            },
            pageSize: 20
        },
        height: 550,
        groupable: true,
        sortable: true,
        reorderable: true,
        resizable: true,
        columnMenu: true,
        filterable: {
            mode: "row"
        },
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        columns: [{
            field: "ContactName",
            title: "Contact Name",
            width: 250,
            locked: true
        }, {
            field: "ContactTitle",
            title: "Contact Title",
            width: 350
        }, {
            field: "CompanyName",
            title: "Company Name",
            width: 350
        }, {
            field: "Country",
            width: 450
        }]
      });

      var grid = $("#KendoDiv").data("kendoGrid");

      $("#save").click(function (e) {
          e.preventDefault();
          localStorage["kendo-grid-options"] = kendo.stringify(grid.getOptions());
      });

      $("#load").click(function (e) {
          e.preventDefault();
          var options = localStorage["kendo-grid-options"];
          if (options) {
              grid.setOptions(JSON.parse(options));
          }
      });

    }
    render() {
        return (
          <div>
            <div>
              <div className="box wide">
                <a href="#" className="k-button" id="save">Save State</a>
                <a href="#" className="k-button" id="load">Load State</a>
              </div>
              <div id="KendoDiv"></div>
            </div>
          </div>
        );
    }
}

module.exports = KendoGridPersistState;
