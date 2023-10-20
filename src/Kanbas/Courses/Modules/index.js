import ModuleList from "./ModuleList";
import { useParams } from "react-router-dom";
import db from "../../Database";

function Modules() {
    const { courseId } = useParams();
    return (
        <div>
            <h2>Modules</h2>
            <div className="row d-none d-lg-block">
                <div className="col">
                    <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item text-danger">{db.courses.find(course => course._id === courseId).name}</li>
                            <li>/</li>
                            <li className="breadcrumb-item" aria-current="page">Modules</li>
                        </ol>
                    </nav>
                </div>
                <hr />
            </div>
            <div class="col-10">
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-secondary"><i className="fa-solid fa-ellipsis-vertical"></i></button>
                    <button className="btn btn-danger me-1" type="button">Module</button>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle me-1" type="button">Publish All</button>
                    </div>
                    <button className="btn btn-secondary me-1">View Progress</button>
                    <button className="btn btn-secondary me-1">Collapse All</button>
                </div>
                <ModuleList />
            </div>
            <div className="col-2"/>
        </div>
    );
}
export default Modules;