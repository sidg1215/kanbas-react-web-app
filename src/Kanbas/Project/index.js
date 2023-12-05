import { Routes, Route, Navigate } from "react-router-dom";
// import Nav from "./nav";
import Signin from "../Users/signin";
import Account from "../Users/account";
import UserTable from "../Users/table";
import Signup from "../Users/signup";

import { Link, useLocation } from "react-router-dom";
function Project() {
    return (
        <div className="row">
            <div className="col-2">
                <ProjectNav />
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/account/:id" element={<Account />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;
function ProjectNav() {
    const { pathname } = useLocation();
    return (
        <nav className="nav nav-tabs mt-2 col-5">
            <Link to="/project/home"
                className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>Home</Link>
            <Link to="/project/signin"
                className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>Sign in</Link>
            <Link className="nav-link" to="/project/signup">
                Sign Up</Link>
            <Link className="nav-link" to="/project/admin/users">
                Users</Link>
            <Link to="/project/account"
                className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Account</Link>
        </nav>
    );
}