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

  handleInputChange = (e) => {
    const filteredEmployees = this.state.employees.filter((person) => {
      return person.name.first.toLowerCase().includes(e.target.value.toLowerCase()) ||
        person.name.last.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      search: e.target.value,
      filteredEmployees
    })
  };

  handleSort = () => {
    const sortedEmployees = this.state.filteredEmployees.sort((a, b) => a.name.first > b.name.first ? 1 : -1)
    this.setState({
      filteredEmployees: sortedEmployees
    })
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
          inputChange={this.handleInputChange}
        />
        <div className="container mt-4">
          <EmployeeTable
            state={this.state}
            formatDate={this.formatDate}
            sort={this.handleSort}
          />
        </div>
      </>
    );
  }
}

export default EmployeesContainer;