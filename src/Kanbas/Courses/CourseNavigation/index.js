import { Link, useParams, useLocation } from "react-router-dom";


function CourseNavigation() {
    const links = ["Home", "Modules", "Assignments", "Grades"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="col-1 text-dark navbarinner" style={{ width: '250px' }}>
            <div className="list-group list-group-flush" style={{ width: 150 }}>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className={`list-group-item`}
                        style={{ borderLeft: `${pathname.includes(link) ? "3px black solid" : "0px black solid"}` }}>
                        <p className={`${pathname.includes(link) ? "text-dark" : "text-danger"}`}>{link}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default CourseNavigation;