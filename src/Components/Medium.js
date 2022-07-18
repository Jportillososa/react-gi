import React, { Component } from "react";
import "./PersonList.css";
class BasicInfo extends Component {
  constructor(props) {
    super();
    this.state = {
      person: {
        name: props.name,
        age: props.age,
        dob: props.dob,
        email: props.email,
        phone: props.phone,
        age: props.age,
      },
    };
  }

  render() {
    return (
      <div className="person">
        <h1>{this.state.person.name}</h1>
        <p> Age: {this.state.person.age}</p>
        <p> DOB: {this.state.person.dob}</p>
        <p> Phone Number: {this.state.person.number}</p>
        <p> Email: {this.state.person.email}</p>
        <p> Age: {this.state.person.age}</p>
      </div>
    );
  }
}

export default BasicInfo;
