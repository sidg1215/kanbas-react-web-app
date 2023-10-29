import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="d-flex flex-col flex-wrap">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        <div className="card" style={{ width: '25rem', marginLeft: '1rem', marginTop: '1rem', marginLeft: '1rem' }}>
                            <div style={{ backgroundColor: '#3498db', height: '150px' }}></div>
                            <div className="card-body">
                                <p className="card-text"><b>
                                    <span className="d-inline-block text-truncate" style={{maxWidth: '20rem', color: '#3498db'}}>
                                        {course.name}
                                    </span>
                                </b></p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;