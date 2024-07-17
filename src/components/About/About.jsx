import React from "react";

const About = ({userName, description1, description2, skills, abbtitls, tituloObjetivo, tituloHabilidade,  poster}) => {
    return (
        <section id="about" className="container my-5">
            <div className="row gy-0">
                <div className="col-md-4">
                    <img src={poster} alt={`Foto de ${userName}`} className="img-fluid rounded-circle"/>
                </div>
                <div className="col-md-7">
                    <div className="d-flex flex-column gx-5">
                        <div className="col p-3">
                            <h2>{abbtitls}</h2>
                            <p>{description1}</p>
                        </div>
                        <div className="col p-3">
                            <h3>{tituloHabilidade}</h3>
                            <ul className="list-group">
                              {skills.map((skill, index)=> (
                                <li key={index} className="list-group-item">{skill.textSlill}</li>  // renderiza as habilidades técnicas como itens de lista
                              ))}
                            </ul>
                        </div>
                        <div className="col p-3">
                            <h3>{tituloObjetivo}</h3>
                            <p>{description2}</p>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
    )
}

export default About;