import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/project/account");
    };
    return (
        <div>
            <h1>Sign In</h1>
            <label>
                Username
            </label>
            <br></br>
            <input value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            <br>
            </br>
            <label>
                Password
            </label>
            <br></br>
            <input value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
            <br></br>
            <button className="btn btn-primary" onClick={signin}> Signin </button>
        </div>
    );
}
export default Signin;