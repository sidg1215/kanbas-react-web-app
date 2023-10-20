import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <ul className="list-group">
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
                                <div className="float-end">
                                    <div className="float-end">
                                        <div className="d-flex flex-row justify-content-evenly">
                                            <i className="fa-solid fa-circle-check" style={{ color: 'green', paddingRight: '5px' }}></i>
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                        </div>
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