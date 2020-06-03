import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      edit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.basestate = this.state;
  }

  handleEdit = (state) => {
    this.setState((state) => {
      return { edit: !state.edit };
    });
  };

  renderForm() {
    if (this.state.edit) {
      return (
        <>
          <input name="firstname" type="text" placeholder={this.state.firstname} onChange= {this.handleChange}></input>
          <input name="lastname" type="text" placeholder={this.state.lastname} onChange={this.handleChange}></input>
          <button
            onClick={() => {
              this.save(this.state);
            }}
          >
            Save
          </button>
          <button onClick={() => {
              this.cancel(this.basestate)
          }}>Cancel</button>
        </>
      );
    }
   return (
    <>
      <div>FirstName: {this.state.firstname} </div>
      <div>LastName: {this.state.lastname}</div>
      <div>
        <button onClick={() => this.handleEdit()}>Edit</button>
      </div>
    </>
    )
  };


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  save = () => {
    this.setState((state) =>{ return {firstname: state.firstname, lastname: state.lastname}});
    this.basestate = this.state;
    this.handleEdit(this.state);
  };

  cancel = () => {
    this.setState(() =>{ return {firstname: this.basestate.firstname, lastname: this.basestate.lastname}});
    this.handleEdit(this.state);
  };
  render() {
    return <div>
        {this.renderForm()}
    </div>;
  }
}
Form.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
};
export default Form;
