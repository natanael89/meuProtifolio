import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import About from './components/About/About';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Contact from './components/Contcat/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import fotoPerfil from './assets/perfil.png';

function App() {
  const menuLinks = [
    {text: 'Sobre Mim', href: '/'},
    {text: 'Projetos', href: '/projects'},
    {text: 'Contato', href: '/contact'},
  ];

  const skillsList = [
      {textSlill: 'Front-end: HTML, CSS, JavaScript, React'},
      {textSlill:'Back-end: Node.js, Express.js, Next.js'},
      {textSlill: 'Banco de dados: MongoDB, Mysql, Postgresql'},
      {textSlill:'Ferramentas: Git, GitHub, Figma, Canvas'},
      
  
  ];

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestão de Tarefas',
      description: 'React, Node.js, Express, MongoDB',
      link: 'project/project1.html'
    },
    {
      id: 2,
      title: 'E-commerce de Moda',
      description: 'Vue.js, Laravel, MySQL',
      link: 'project/project2.html'
    }
   
  ]

  return (
    <Router>
    <div className="App">
      <div className='background-image'>
        <Navigation userName="Natanael carvalho dos santos" menuLinks={menuLinks}/>
        <Header userName="Natanael carvalho dos santos" subtitle="Desenvolvedor Full Stack"/>
        <Routes>
          <Route 
            path='/'
            element={
              <About 
              userName="Natanael Carvalho dos Santos"
              abbtitls="Sobre Mim" 
              poster={fotoPerfil}
              description1="Olá! Meu nome é Natanael e sou um Desenvolvedor Full stack com experiência em desenvolvimento web e criação de soluções eficientes e inovadoras. Tenho uma sólida experiência trabalhando com diversas tecnologias e fremeworks, e estou sempre em busca de aprender novas habilidades e  aprimorar minhas capacidades."
              tituloHabilidade = "Habilidade Técnicas"
              skills={skillsList}
              tituloObjetivo = "Objetivos Profissionais"
              description2="Estou em busca de novas oportunidades que me permitam aplicar minhas habilidades e contribuir para projetos desafiadores. Meu objetivo é continuar crescendo como desenvolvedor, explorando novas tecnologias em equipes colaborativas."
              />
            }
          
          />
          <Route path='/projects' element={<Projects projects={projects}/>}/>
          <Route path='/projects/:projectId' element={<ProjectDetails projects={projects}/>}/>
          <Route 
            path='/contact'
            element={
              <Contact 
              contactEmail="natanaelc7@gmail.com" buttonText="natanaelc7@gmail.com"
              linkedinProfile="https://www.linkedin.com/in/natanael-c7-879568b7/" buttonLinkedin="Linkedin"
              githubProfile="https://github.com/natanael89?tab=repositories" buttonGitHub="GitHub"
              />
            }
            />         
        </Routes>
        <Footer/>
    </div>
    </div>
    </Router>
  );
}

export default App;
