import React, { Component } from 'react';

class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mobile: '',
      semester: '',
      gender: '',
      message: '',
      password: '',
      confirmPassword: '',
      agree: false,
    };
  }

  // Handle input change for all fields
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();

    const {
      name,
      email,
      mobile,
      semester,
      gender,
      message,
      password,
      confirmPassword,
      agree,
    } = this.state;

    // Basic validation
    if (!name || !email || !mobile || !semester || !gender || !message || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (!agree) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    const formData = {
      name,
      email,
      mobile,
      semester,
      gender,
      message,
      password,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form submitted successfully and saved to localStorage!');
  };

  render() {
    const {
      name,
      email,
      mobile,
      semester,
      gender,
      message,
      password,
      confirmPassword,
      agree,
    } = this.state;

    return (
      <div>
        <h2>Register using class Component</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter your name"
          /><br /><br />

          <label>Email:</label>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Enter your email"
          /><br /><br />

          <label>Mobile:</label>
          <input
            name="mobile"
            value={mobile}
            onChange={this.handleChange}
            placeholder="Enter your mobile number"
          /><br /><br />

          <label>Semester:</label>
          <select name="semester" value={semester} onChange={this.handleChange}>
            <option value="">--Select--</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
          </select><br /><br />

          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === 'Male'}
            onChange={this.handleChange}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === 'Female'}
            onChange={this.handleChange}
          /> Female<br /><br />

          <label>Message:</label><br />
          <textarea
            name="message"
            value={message}
            onChange={this.handleChange}
            placeholder="Write your message here..."
          /><br /><br />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Enter password"
          /><br /><br />

          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder="Re-enter password"
          /><br /><br />

          <label>
            <input
              type="checkbox"
              name="agree"
              checked={agree}
              onChange={this.handleChange}
            />
            I agree to the Terms & Conditions
          </label><br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form2;
