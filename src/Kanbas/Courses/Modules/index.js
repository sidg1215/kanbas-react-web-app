import ModuleList from "./ModuleList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Modules() {
    const { courseId } = useParams();
    const [course, setCourse] = useState("hi");
    const findCourseById = async (courseId) => {
        const URL = `${process.env.REACT_APP_BASE_API}/api/courses`;
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        console.log(course);
        async function wrapper() {
            await findCourseById(courseId);
            console.log(course);
        }
        wrapper();
        console.log(course);
    }, []);
    return (
        <div>
            <h2>Modules</h2>
            <div className="row d-none d-lg-block">
                <div className="col">
                    <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item text-danger">{course.name}</li>
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