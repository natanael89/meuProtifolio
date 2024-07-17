import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = ({projects}) => {
   const { projectId} = useParams();
   const project = projects.find(proj => proj.id === Number(projectId));

   if(!project) return <p>Projeto não encontrado!</p>

    return (
        <div className="container my-5">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="btn btn-dark">Visite o Projeto</a>
        </div>
    )
}

export default ProjectDetails