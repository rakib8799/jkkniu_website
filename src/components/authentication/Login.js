/* eslint-disable react/react-in-jsx-scope */

import React from "react";
const Login = () => {
        return (
                <div
                        className="card rounded m-auto py-4 px-5 shadow"
                        style={{ width: "35%" }}
                >
                        <form>
                                <h3 className="text-center">Sign In</h3>

                                <div className="mb-3">
                                        <label>Email address</label>
                                        <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter email"
                                        />
                                </div>

                                <div className="mb-3">
                                        <label>Password</label>
                                        <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter password"
                                        />
                                </div>

                                <div className="mb-3">
                                        <div className="custom-control custom-checkbox">
                                                <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck1"
                                                />
                                                <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck1"
                                                >
                                                        Remember me
                                                </label>
                                        </div>
                                </div>

                                <div className="d-grid">
                                        <button
                                                type="submit"
                                                className="btn btn-main text-white"
                                        >
                                                Submit
                                        </button>
                                </div>
                                <p className="forgot-password text-right">
                                        Forgot <a href="/">password?</a>
                                </p>
                        </form>
                </div>
        );
};
export default Login;
