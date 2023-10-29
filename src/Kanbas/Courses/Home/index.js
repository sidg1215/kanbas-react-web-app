import ModuleList from "../Modules/ModuleList";
import { useParams } from "react-router";
import db from "../../Database";


function Home() {
    const { courseId } = useParams();
    return (
        <div className="row">
            <h2>Home</h2>
            <div className="row d-none d-lg-block">
                <div className="col">
                    <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item text-danger">{db.courses.find(course => course._id === courseId).name}</li>
                            <li>/</li>
                            <li className="breadcrumb-item" aria-current="page">Home</li>
                        </ol>
                    </nav>
                </div>
                <hr />
            </div>
            <div className="col">
                <ModuleList />
            </div>
            <div className="col">
                <h2>Status</h2>
                <div className="d-none d-xl-block col">
                    <h1>Course Status</h1>
                    <button>Unpublish</button>
                    <button>Published</button>
                    <ul>
                        <li><a href="#">Import Existing Content</a></li>
                        <li><a href="#">Import From Commons</a></li>
                        <li><a href="#">View Course Stream</a></li>
                        <li><a href="#">New Announcement</a></li>
                        <li><a href="#">New Analytics</a></li>
                        <li><a href="#">View Course Notifications</a></li>
                    </ul>
                    <h1>Coming Up</h1>
                    <a href="#">View Calendar</a>
                    <ul>
                        <li><a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
                        <li><a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
                        <li><a href="#">Lecture CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Home;

