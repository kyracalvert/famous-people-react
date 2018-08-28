import React, { Component } from 'react';

class Person extends Component {
    constructor() {
        //Call Component constructor before our App constructor
        super();
        // Runs one time when this component is created
    
        //Set up variables (which will be called 'state')
        this.state = { userName: '', userRole: '' };
    
        // const self = this; // similar
        // Without this line, 'this' would be undefined in handleChange
        // this.handleChange = this.handleChange.bind(this);
      }
    
    
      handleChange = (event) => {
        this.setState({ userName: event.target.value });
      }

      handleRoleChange = (event) => {
        this.setState({ userRole: event.target.value });
      }

     
    render() {
        return (
          <div>
              <input onChange={this.handleChange} />
              <input onChange={this.handleRoleChange} />
              <br />
              Name: {this.state.userName} Role: {this.state.userRole}
          </div>
        );
    }
}

export default Person;