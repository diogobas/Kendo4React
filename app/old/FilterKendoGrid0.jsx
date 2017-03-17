import React, { Component } from 'react';
import * as people from 'people';

class FilterKendoGrid extends Component {

    componentDidMount() {
      $("#FilterKendoGrid").kendoGrid({
        dataSource: {
          data: people.filterPeople(50, "SeattLE"),
          schema: {
            model: {
              fields: {
                City: { type: "string" },
                Title: { type: "string" },
                BirthDate: { type: "date" }
              }
            }
          },
          pageSize: 15
      },
      height: 550,
      scrollable: true,
      filterable: {
        extra: false,
        operators: {
          string: {
            startswith: "Starts with",
            eq: "Is equal to",
            neq: "Is not equal to"
          }
        }
      },
      pageable: true,
      columns: [
        {
          title: "Name",
          width: 160,
          filterable: false,
          template: "#=FirstName# #=LastName#"
        },
        {
          field: "City",
          width: 130,
          filterable: {
            ui: this.cityFilter
          }
        },
        {
          field: "Title",
          filterable: {
            ui: this.titleFilter
          }
        },
        {
          field: "BirthDate",
          title: "Birth Date",
          format: "{0:MM/dd/yyyy HH:mm tt}",
          filterable: {
            ui: "datetimepicker"
          }
        }
       ]
      });
    }

    titleFilter(element) {
      element.kendoAutoComplete({
          dataSource: people.titles
      });
    }

    cityFilter(element) {
      element.kendoDropDownList({
          dataSource: people.cities,
          optionLabel: "--Select Value--"
      });
    }

    render() {
      return (
        <div id="FilterKendoGrid"></div>
      );
    }
}

module.exports = FilterKendoGrid;
