import React from 'react'
import TweetHackService from '../../services/TweetHackService'
import { Link, Redirect } from 'react-router-dom'

class Register extends React.Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
      name: '',
      avatar: null
    },
    error: false,
    loading: false,
    success: false
  }

  handleChange = (event) => {
    const { name, value, files } = event.target

    this.setState({
      data: {
        ...this.state.data,
        [name]: files ? files[0] : value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { data } = this.state

    const formData = new FormData()
    formData.append('username', data.username)
    formData.append('name', data.name)
    formData.append('avatar', data.avatar)
    formData.append('password', data.password)
    formData.append('email', data.email)

    this.setState({ loading: true, error: false }, () => {
      TweetHackService.register(formData)
        .then(() => {
          this.setState({ success: true })
        })
        .catch(() => {
          this.setState({ error: true, loading: false })
        })
    })
  }

  render() {
    const errorClassName = this.state.error ? 'is-invalid' : ''

    if (this.state.success) {
      return <Redirect to="/login"/>
    }

    return (
      <div className="Register">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              value={this.state.data.name}
              onChange={this.handleChange}
              autoComplete="off"
              name="name"
              type="text"
              className={`form-control ${errorClassName}`}
              id="name"
              placeholder="Enter name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>

            <input
              value={this.state.data.username}
              onChange={this.handleChange}
              autoComplete="off"
              name="username"
              type="text"
              className={`form-control ${errorClassName}`}
              id="username"
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              value={this.state.data.email}
              onChange={this.handleChange}
              autoComplete="off"
              name="email"
              type="email"
              className={`form-control ${errorClassName}`}
              id="email"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mb-5">
            <label htmlFor="password">Password</label>

            <input
              value={this.state.data.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              className={`form-control ${errorClassName}`}
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>

            <input
              onChange={this.handleChange}
              name="avatar"
              type="file"
              className={`form-control ${errorClassName}`}
              id="avatar"
            />
          </div>

          <button
            type="submit"
            className="btn btn-block btn-primary mb-3"
            disabled={this.state.loading}
          >
            Sign up
          </button>
        </form>
      </div>
    )
  }
}

export default Register