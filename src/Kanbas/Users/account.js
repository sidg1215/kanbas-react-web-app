import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function Account() {
    const [account, setAccount] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        console.log(account);
        setAccount(account);
    };
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
        console.log(user);
    };
    const save = async () => {
        console.log("In save function");
        const res = await client.updateUser(account);
        console.log(res);
    };
    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div className="col-3">
                    <label form="password">
                        Password:
                    </label>
                    <input name="password" value={account.password}
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <label form="firstname">
                        First name:
                    </label>
                    <input name="firstname" value={account.firstName}
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    <label form="lastname">
                        Last name:
                    </label>
                    <input name="lastname" value={account.lastName}
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <label form="dob">
                        DOB:
                    </label>
                    <input value={account.dob}
                        name="dob"
                        type="date"
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    <div>Dob selected: {account.dob}</div>
                    <label form="email">
                        Email:
                    </label>
                    <input name="email"
                        value={account.email}
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <label form="role">
                        Role:
                    </label>
                    <select onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}
                        name="role"
                        value={account.role}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <br></br>
                    <button className="btn btn-primary w-100" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-danger w-100" onClick={signout}>
                        Signout
                    </button>
                    <Link to="/project/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            )}
        </div>
    );
}
export default Account;
