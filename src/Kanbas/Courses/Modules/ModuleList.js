import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules
} from "./modulesReducer";
import { findModulesForCourse, createModule, updateModule as clientUpdateModule } from "./modules/client";


function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const handleAddModule = () => {
        console.log(module);
        createModule(courseId, module).then((module) => {
            console.log(module);
            dispatch(addModule(module));
        });
    };
    const handleUpdateModule = async () => {
        const status = await clientUpdateModule(module);
        dispatch(updateModule(module));
    };

    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);


    return (
        <ul className="list-group">
            <li className="list-group-item">
                <input textarea className="form-control" value={module.name}
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <textarea className="form-control" value={module.description}
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                />
                <div className="d-flex flex-row">
                    <button
                        className="btn btn-success me-2"
                        onClick={handleAddModule}>
                        Add
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={handleUpdateModule}> 
                        Update
                    </button>
                </div>
            </li>

            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, _) => (
                        <div className="list-group-item">
                            <div class="col">
                                <h3>{module.name}</h3>
                                <p>{module.description}</p>
                            </div>
                            <div className="col">
                                <button
                                    className="btn btn-danger me-2"
                                    onClick={() => dispatch(deleteModule(module._id))}>
                                    Delete
                                </button>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => dispatch(setModule(module))}>
                                    Edit
                                </button>
                                <div className="float-end">
                                    <div className="d-flex flex-row justify-content-evenly">
                                        <i className="fa-solid fa-circle-check" style={{ color: 'green', paddingRight: '5px' }}></i>
                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
            }
        </ul>
    );
}
export default ModuleList;