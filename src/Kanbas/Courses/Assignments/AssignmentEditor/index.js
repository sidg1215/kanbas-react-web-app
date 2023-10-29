import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <h2>Assignment Name</h2>
            <div className="col-10">
                <div className="d-flex flex-row-reverse">
                    <b className="text-success">
                        Published
                    </b>
                </div>
                <hr />
                <form className="form-group">
                    <div className="mb-3 d-flex flex-column">
                        <label>
                            Assignment Name
                        </label>
                        <input className="form-control" value="A1" />
                        <br />
                        <textarea className="form-control"></textarea>
                    </div>
                    <div className="mb-3 d-flex flex-row">
                        <label style={{ paddingRight: '5px' }}>
                            Points
                        </label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="mb-3 d-flex flex-row">
                        <label style={{ paddingRight: '5px' }}>
                            Assignment Group
                        </label>
                        <select className="form-control form-select">
                            <option>ASSIGNMENTS</option>
                        </select>
                    </div>
                    <div className="mb-3 d-flex flex-row">
                        <label style={{ paddingRight: '5px' }}>
                            Display Grade as
                        </label>
                        <select className="form-control form-select">
                            <option>Percentage</option>
                        </select>
                    </div>
                    <div className="mb-3 d-flex flex-row">
                        <label style={{ paddingRight: '5px' }}>
                            Submission Type
                        </label>
                        <div className="card form-control">
                            <select className="form-control form-select">
                                <option>Online</option>
                            </select>
                            <b>Online Entry Options</b>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="switch1" />
                                <label className="form-check-label" for="switch1">
                                    Online
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="switch2" />
                                <label className="form-check-label" for="switch2">
                                    Website URL
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="switch3" />
                                <label className="form-check-label" for="switch3">
                                    Media Recordings
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="switch4" />
                                <label className="form-check-label" for="switch4">
                                    Student Annotations
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="switch5" />
                                <label className="form-check-label" for="switch5">
                                    File Uploads
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <label style={{ paddingRight: '5px' }}>
                            Assign
                        </label>
                        <div className="card form-control">
                            <b>Assign to</b>
                            <input className="form-control" />
                            <b>Due</b>
                            <input type="date" className="form-control" />
                            <div className="row">
                                <div className="col-6">
                                    <b>Available from</b>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-6">
                                    <b>Until</b>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                            <button className="btn btn-light">Add</button>
                        </div>
                    </div>
                </form>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <input type="checkbox" /> <label style={{ paddingLeft: '5px' }}>Notify users assignment has changed</label>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-row justify-content-end">
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                                className="btn btn-light">
                                Cancel
                            </Link>
                            <button onClick={handleSave} className="btn btn-danger">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2"/>
        </div>

    );
}


export default AssignmentEditor;