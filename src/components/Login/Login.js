import React, { Component } from 'react';
import './login.css';
import logo from "./../assets/logo.png";


export default class Login extends Component {
    render() {
        return (
            <div className="landingBackground">
                <div className="login">
                    <img className="logo" src={logo} alt="logo"/>
                    <div className="logoText">
                        <h1 className="helo">Helo</h1>
                    </div>
                    <div className="loginButton">
<<<<<<< HEAD
                    <a href='http://localhost:3005/api/auth/login' className="loginLink">Login / Register</a>
=======
                    <a href={process.env.APP_LOGIN} className="loginLink">Login / Register</a>
>>>>>>> d932b88f6c0a0be4cfddc9c124270b1d884668b7
                    </div>
                </div>
            </div>
        )
    }
}
