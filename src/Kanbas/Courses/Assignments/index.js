import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { useState, useEffect } from "react";
import axios from "axios";


function Assignments() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const [assignments, setAssignments] = useState([]);
    const findCourseById = async (courseId) => {
        const URL = `${process.env.REACT_APP_BASE_API}/api/courses`;
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };

    const getAssignments = async (courseId) => {
        const URL = `${process.env.REACT_APP_BASE_API}/api/courses`;
        const response = await axios.get(
            `${URL}/${courseId}/assignments`
        );
        console.log(response);
        setAssignments(response.data);
    };

    useEffect(() => {
        async function wrapper() {
            await findCourseById(courseId);
            await getAssignments(courseId);
        }
        wrapper();
    }, []);
    
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <div className="row d-none d-lg-block">
                <div className="col">
                    <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item text-danger">{course.name}</li>
                            <li>/</li>
                            <li className="breadcrumb-item" aria-current="page">Assignments</li>
                        </ol>
                    </nav>
                </div>
                <hr />
            </div>
            <div className="list-group col-10">
                <div className="row">
                    <div className="col">
                        <input placeholder="Search for assignment" className="form-control" />
                    </div>
                    <div className="col">
                        <div className="d-flex flex-row-reverse">
                            <button className="btn btn-secondary"><i className="fa-solid fa-ellipsis-vertical"></i></button>
                            <button className="btn btn-danger me-1" type="button">Assignment</button>
                            <button className="btn btn-secondary dropdown-toggle me-1" type="button">Group</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between list-group-item">
                    Assignments
                    <div className="float-end">
                        <div className="d-flex flex-row justify-content-evenly">
                            40% of grade
                        </div>
                    </div>
                </div>
                {assignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item bg-light" style={{ borderLeft: '5px green solid' }}>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <div className="float-end">
                                <div className="d-flex flex-row justify-content-evenly">
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                            </div>
                            <b>{assignment.title}</b>
                            <p>
                                Week 0
                            </p>
                            <p>
                                Due Sep 18
                            </p>
                            <div className="float-end">
                                <div className="d-flex flex-row justify-content-evenly">
                                    <i className="fa-solid fa-plus"></i>
                                    <i className="fa-solid fa-circle-check" style={{ color: 'green', paddingRight: '5px' }}></i>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="col-2" />
        </div>
    );
}
export default Assignments;