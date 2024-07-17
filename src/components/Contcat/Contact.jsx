/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState } from "react";

const Contact = ({ contactEmail, linkedinProfile,  githubProfile, buttonText,  buttonLinkedin,  buttonGitHub}) => {
    const [formData, setFormData] = useState({
        name: '', 
        email: '', 
        message: ''
    });

    // const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    



    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('https://formspree.io/f/mvgpgpod', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if(!response.ok){
                throw new Error('Feiled to send message');
            }

            setFormData({name: '', email: '', message: ''});
            
            alert('Mensagem enviada com sucesso!')


        } catch (error) {
            console.error('Erro ao enviar a mensagem:', error);
            alert('Erro ao enviar a mensagem. Por favor, tente novamente.');
        }
       
    }


    return (
        <section id="contact" className="container my-5">
            <h2>Contato</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input 
                    type="text" 
                    className="form-control border-dark" 
                    id="name" name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    className="form-control border-dark" 
                    id="email" name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea 
                    className="form-control border-dark " 
                    id="message" name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows="5" 
                    aria-hidden="true"
                    required></textarea>
                </div>
                <button type="submit" className="btn btn-dark my-2">Enviar</button>
            </form>
            {/* {isSubmitted && (
                <div className="alert alert-success text-center" role="alert">
                    Mensagem enviada com sucesso!
                </div>
            )} */}
            <ul className="list-inline list-column my-4">
                <li className="list-inline-item"><i className="fas fa-envelope p-1"></i><a href={`mailto:${contactEmail}`}  className="text-decoration-none" target="blank">{buttonText}</a></li>
                <li className="list-inline-item"><i className="fab fa-linkedin p-1"></i><a href={linkedinProfile}  className="text-decoration-none" target="blank">{buttonLinkedin}</a></li>
                <li className="list-inline-item"><i className="fab fa-github p-1"></i><a href={githubProfile}  className="text-decoration-none" target="blank">{buttonGitHub}</a></li>
            </ul>
        </section>
    )
}


export default Contact;