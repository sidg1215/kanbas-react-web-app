import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <h1>Grades</h1>
            <div className="d-flex flex-row-reverse">
                <button type="button" className="btn btn-light">Configure</button>
                <select type="button" className="btn btn-light" id="select-export">
                    <option value="EXPORT">Export</option>
                </select>
                <button type="button" className="btn btn-light">Import</button>
            </div>
            <div className="row">
                <div className="col" style={{ width: '100%' }}>
                    <h3>Student Names</h3>
                    <input className="form-control" type="text" placeholder="Search Students" style={{ width: '100%' }} />
                </div>
                <div className="col">
                    <h3>Assignment Names</h3>
                    <input className="form-control" type="text" placeholder="Search Assignments" style={{ width: '100%' }} />
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <button type="button" className="btn btn-light" style={{ marginTop: '5px' }}>Apply Filters</button>
                </div>
            </div>
            <hr />

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead class="bg-light">
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td className="text-danger">{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td><input type="number" value={grade?.grade || ""} min="0" max="100" /></td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;
