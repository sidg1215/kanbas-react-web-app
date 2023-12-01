import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/modules`;
const COURSES_URL = `${API_BASE}/courses`;
export const findModulesForCourse = async (courseId) => {
    console.log(API_BASE);
    console.log(COURSES_URL);
    const response = await axios
        .get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
};
export const createModule = async (courseId, module) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        module
    );
    return response.data;
};
export const deleteModule = async (moduleId) => {
    const response = await axios
        .delete(`${MODULES_URL}/${moduleId}`);
    console.log(response);
    console.log(`${MODULES_URL}/${moduleId}`);
    return response.data;
};

export const updateModule = async (module) => {
    console.log(module);
    const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
};
