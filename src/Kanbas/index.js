import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import AssignmentEditor from "./Courses/Assignments/AssignmentEditor";
import Nav from "../Nav";



function Kanbas() {

    return (
        <div>
            <div className="row">
                <KanbasNavigation />
                <div className="col">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={<Dashboard />} />
                        <Route path="Courses/:courseId/*" element={<Courses />} />
                        <Route path="Assignments/:assignmentId"
                            element={<AssignmentEditor />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Kanbas;