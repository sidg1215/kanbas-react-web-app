import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/project/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Sign Up</h1>
            {error && <div>{error}</div>}
            <label>
                Username:
            </label>
            <br></br>
            <input
                value={credentials.username}
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value
                })} />
            <br></br>
            <label>
                Password:
            </label>
            <br></br>
            <input
                value={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value
                })} />
            <br></br>
            <button onClick={signup} className="btn btn-primary">
                Sign Up
            </button>
        </div>
    );
}
export default Signup;