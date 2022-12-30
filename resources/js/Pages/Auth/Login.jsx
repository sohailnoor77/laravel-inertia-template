import React from "react";

const Login = () => {


    return (
        <div className="login-container">

            <div className={"login-card"}>
                <div className="feather-container">
                    <div className="box">

                    </div>
                    <div className="box2">

                    </div>
                </div>
                <div className="login-card-header">
                    <h3 className={"login-card-header-title"}>Login</h3>
                    <p>Please enter your credential </p>
                </div>
                <div className="login-card-body">
                    <div className="field-container">
                        <input className="field-input" id="username" name="username" type="text" placeholder=" "/>
                        <label className="field-placeholder" htmlFor="username">Username</label>
                    </div>
                    <div className="field-container">
                        <input className="field-input" id="password" name="password" type="password" placeholder=" "/>
                        <label className="field-placeholder" htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="login-card-footer">
                    <button className="custom-button">Login</button>
                        <a href="#" className={"forgot"}>Forgot username or password?</a>
                </div>

            </div>
        </div>
    );
};

export default Login;
