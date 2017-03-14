import React, { Component } from 'react';

class KendoGrid extends Component {

    componentDidMount() {

        $("#KendoDiv").kendoGrid({
            columns: [
            	{
                    field: "name",
                    title: "Name"
                }, {
                    field: "type",
                    title: "Type",
                },

                {
                    command: ["add", "edit", "destroy"],
                    title: "User Action",
                    width: "250px"
                }
            ],
            editable: "popup",
            height: 400,
            sortable: true,
            reorderable: true,
            resizable: true,
            filterable: true,
            columnMenu: true,
            dataSource: [{
                name: "Tea",
                type: "Beverages"
            }, {
                name: "Coffee",
                type: "Beverages"
            }, {
                name: "Ham",
                type: "Food"
            }, {
                name: "Bread",
                type: "Food"
            }, {
                name: "Tea",
                type: "Beverages"
            }, {
                name: "Coffee",
                type: "Beverages"
            }, {
                name: "Ham",
                type: "Food"
            }, {
                name: "Bread",
                type: "Food"
            }],

        });

    }
    render() {
        return (
          <div>
            <p> Kendo grid Implementation with React </p>
            <div>
              <div id = "KendoDiv"></div>
            </div>
          </div>
        );
    }
}

module.exports = KendoGrid;
