import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import AssignmentEditor from "./Courses/Assignments/AssignmentEditor";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";



function Kanbas() {

    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    const addCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            response.data,
            ...courses,
        ]);
        setCourse({ name: "" });
    };

    const deleteCourse = async (course) => {
        console.log(course);
        const response = await axios.delete(
            `${URL}/${course}`
        );
        console.log(response);
        const newCourses = courses.filter(
            (c) => c._id !== course);
        setCourses(newCourses);
    };
    const updateCourse = async (course) => {
        console.log(course);
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                }
                return c;
            })
        );
        setCourse({ name: "" });
    };


    const URL = "http://localhost:4000/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);



    return (
        <div>
            <Provider store={store}>
                <div className="row">
                    <KanbasNavigation />
                    <div className="col">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Account" element={<h1>Account</h1>} />
                            <Route path="Dashboard" element={<Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse} />} />
                            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                            <Route path="Assignments/:assignmentId"
                                element={<AssignmentEditor />} />
                        </Routes>
                    </div>
                </div>
            </Provider>
        </div>
    );
}
export default Kanbas;