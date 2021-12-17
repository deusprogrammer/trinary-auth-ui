import React from 'react';
import {Form, Text, useFormApi, useFormState} from 'informed';
import axios from 'axios';

import config from '../utils/config';

export default () => {
    const login = (formState) => {
        axios.post(config.baseUrl + "/auth", {
            username: formState.values.username,
            password: formState.values.password
        }).then(response => {
            window.localStorage.setItem("accessToken", response.data._id);
            window.location = `https://deusprogrammer.com/util/auth/dev/redirect?to=${formState.values.redirect}`;
        }).catch(error => {
            this.setState({error: "Login Failed"});
        })
    }

    const twitchLogin = (formState) => {
        localStorage.setItem("twitchRedirect", `https://deusprogrammer.com/util/auth/dev/redirect?to=${formState.values.redirect}`);
        window.location = 'https://deusprogrammer.com/api/auth-svc/auth/twitch';
    }

    return (
        <div>
            <Form>
                {
                    ({ formState }) => (
                        <>
                            <label>Redirect:</label><Text field="redirect" /><br />
                            <label>Username:</label><Text field="username" /><br />
                            <label>Password:</label><Text field="password" type="password" /><br />
                            <button onClick={() => {login(formState)}}>Login</button>
                            <button onClick={() => {twitchLogin(formState)}}>Twitch Login</button>
                        </>
                    )
                }
            </Form>
        </div>
    );
}