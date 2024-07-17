/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = ({projects}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulando um delay para carregar os projetos
    }, []);

    return (
        <section id="projects" className="container my-5">
           <h2>Projetos</h2>
           {loading ? ( 
             <p>Carregando projetos...</p>
           ) : ( <div className="row">
             {projects.map((project, index) => (
                <motion.div
                className="col-md-4"
                key={project.id}
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5, delay: index * 0.2}}
                >
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <Link to={project.link}>
                                <button className="btn btn-dark">Ver Projeto</button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
             ))
              }
           </div>)
          
            }
        </section>
    )
}

export default Projects;