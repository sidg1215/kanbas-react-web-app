import React from "react";
import { Link } from "react-router-dom";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {
    return (
        <div>
            <h1>Dashboard</h1>
            <hr></hr>
            <h2>Published courses ({courses.length})</h2>
            <div className="row">
                <div class="col-5 ms-3">
                    <input value={course.name} className="form-control"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <input value={course.number} className="form-control"
                        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                    <input value={course.startDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                    <input value={course.endDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                    <button className="btn btn-success me-2" onClick={addNewCourse} >
                        Add
                    </button>
                    <button onClick={updateCourse} className="btn btn-primary">
                        Update
                    </button>
                </div>
            </div>
            <div className="d-flex flex-col flex-wrap">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        <div className="card" style={{ width: '25rem', marginLeft: '1rem', marginTop: '1rem', marginLeft: '1rem' }}>
                            <div style={{ backgroundColor: '#3498db', height: '150px' }}></div>
                            <div className="card-body">
                                <p className="card-text"><b>
                                    <span className="d-inline-block text-truncate" style={{ maxWidth: '20rem', color: '#3498db' }}>
                                        {course.name}
                                    </span>
                                </b></p>
                                <button
                                    className="btn btn-danger me-2"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                    Delete
                                </button>
                                <button
                                    className="btn btn-warning"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;