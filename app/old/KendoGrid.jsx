import React, { Component } from 'react';

class KendoGrid extends Component {

    componentDidMount() {

        $("#KendoDiv").kendoGrid({
          dataSource: {
                  type: "odata",
                  serverPaging: true,
                  serverSorting: true,
                  pageSize: 100,
                  transport: {
                      read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
                  }
              },
              height: 543,
              scrollable: {
                  virtual: true
              },
              sortable: true,
              editable: "popup",
              reorderable: true,
              resizable: true,
              filterable: true,
              columnMenu: true,
              columns: [
                  { field: "OrderID", title: "Order ID", width: 110 },
                  { field: "CustomerID", title: "Customer ID", width: 130},
                  { field: "ShipName", title: "Ship Name", width: 280 },
                  { field: "ShipAddress", title: "Ship Address" },
                  { field: "ShipCity", title: "Ship City", width: 160 },
                  { field: "ShipCountry", title: "Ship Country", width: 160 },
                  { field: "UserAction", title: "User Action", width: 160, command: ["edit"," " , "destroy"] }
              ]
        });

    }
    render() {
        return (
          <div>
            <div>
              <div id = "KendoDiv"></div>
            </div>
          </div>
        );
    }
}

module.exports = KendoGrid;
