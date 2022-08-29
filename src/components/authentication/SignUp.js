/* eslint-disable react/react-in-jsx-scope */

import React from "react";
import "./auth.css";
const SignUp = () => {
        return (
                <div
                        className="card rounded m-auto py-4 px-5 shadow"
                        style={{ width: "35%" }}
                >
                        <form>
                                <h3 className="text-center">Sign Up</h3>

                                <div className="mb-3">
                                        <label>First name</label>
                                        <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First name"
                                        />
                                </div>

                                <div className="mb-3">
                                        <label>Last name</label>
                                        <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Last name"
                                        />
                                </div>

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

                                <div className="d-grid">
                                        <button
                                                type="submit"
                                                className="btn btn-main text-white"
                                        >
                                                Sign Up
                                        </button>
                                </div>
                                <p className="forgot-password text-right">
                                        Already registered{" "}
                                        <a href="/login">sign in?</a>
                                </p>
                        </form>
                </div>
        );
};
export default SignUp;
