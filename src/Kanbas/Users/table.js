import React, { useState, useEffect } from "react";
import * as client from "./client";
import { Link } from "react-router-dom";

function UserTable() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };



    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    <tr>
                        <td>
                            <input value={user.username} placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.password} placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.firstName} placeholder="First name" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.lastName} placeholder="Last name" onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-primary" onClick={createUser}>Create</button>
                        </td>
                        <td>
                            <button onClick={updateUser} className="btn btn-success">Update</button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <Link to={`/project/account/${user._id}`}>
                                {user.username}
                            </Link>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => selectUser(user)}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteUser(user)}>Delete</button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;