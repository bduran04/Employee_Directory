import React, { Component } from "react";
import SearchBar from "../SearchBar";
import EmployeeTable from "../EmployeeTable";
import API from "../../utils/API";

class EmployeesContainer extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    sortDirections: this.initialSortDirections,
  };

  get initialSortDirections() {
    return {
      name: "",
      phone: "",
      email: "",
      dob: "",
    };
  }

  componentDidMount() {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  formatDate = (date) => {
    date = new Date(date);
    let dob = [];
    dob.push(("0" + (date.getMonth() + 1)).slice(-2));
    dob.push(("0" + date.getDate()).slice(-2));
    dob.push(date.getFullYear());

    return dob.join("/");
  };

  render() {
    return (
      <>
        <SearchBar
          value={this.state.search}
        />
        <div className="container mt-4">
          <EmployeeTable
            state={this.state}
            formatDate={this.formatDate}
          />
        </div>
      </>
    );
  }
}

export default EmployeesContainer;