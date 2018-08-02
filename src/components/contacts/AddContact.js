import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (e) => e.preventDefault()

  render() {
    const { email, phone, name } = this.state
    return (
      <div className="card mb-3">
        <div className="card-header">
          Add Contact
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name" className="form-control fom-control-lg"
                value={name}
                placeholder="Enter Name..."
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control fom-control-lg"
                value={email}
                placeholder="Enter Email..."
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control fom-control-lg"
                value={phone}
                placeholder="Enter Phone..."
                onChange={this.onChange}
              />
            </div>
            <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;