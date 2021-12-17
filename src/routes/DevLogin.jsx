import React from 'react';
import {Form, Text} from 'informed';
import axios from 'axios';

import config from '../utils/config';

export default () => {
    let formApi;

    const login = () => {
        axios.post(config.baseUrl + "/auth", {
            username: formApi.getState().values.username,
            password: formApi.getState().values.password
        }).then(response => {
            window.localStorage.setItem("accessToken", response.data._id);
            window.location = `https://deusprogrammer.com/util/auth/dev/redirect?to=${formApi.values.redirect}`;
        }).catch(error => {
            this.setState({error: "Login Failed"});
        })
    }

    const twitchLogin = () => {
        localStorage.setItem("redirect", `https://deusprogrammer.com/util/auth/dev/redirect?to=${formApi.values.redirect}`);
        window.location = 'https://deusprogrammer.com/api/auth-svc/auth/twitch';
    }

    return (
        <div>
            <Form getApi={f => formApi = f}>
                <label>Redirect:</label><Text field="redirect" /><br />
                <label>Username:</label><Text field="username" /><br />
                <label>Password:</label><Text field="password" type="password" /><br />
                <button onClick={() => {login()}}>Login</button>
                <button onClick={() => {twitchLogin()}}>Twitch Login</button>
            </Form>
        </div>
    );
}