import React from 'react'
import {Form, Text} from 'informed'
import axios from 'axios'

import {Link} from 'react-router-dom'

import config from '../utils/config'

export default class Login extends React.Component {
    state = {
        error: null
    }

    login = () => {
        axios.post(config.baseUrl + "/auth", {
            username: this.formApi.getState().values.username,
            password: this.formApi.getState().values.password
        }).then(response => {
            window.localStorage.setItem("accessToken", response.data._id)
            let redirect = new URLSearchParams(this.props.location.search).get("redirect")

            if (!redirect) {
                this.props.history.push(`${process.env.PUBLIC_URL}/success`)
                return
            }

            window.location = redirect
        }).catch(error => {
            this.setState({error: "Login Failed"})
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>{this.state.error}</div>
                <Form getApi={formApi => this.formApi = formApi}>
                    <label>Username</label><Text field="username" /><br />
                    <label>Password:</label><Text field="password" type="password" /><br />
                    <button onClick={() => {this.login()}}>Login</button>
                </Form>

		<Link to={`${process.env.PUBLIC_URL}/register`}>Register</Link>
            </div>
        )
    }
}
