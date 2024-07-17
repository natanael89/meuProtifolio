import React, { useEffect } from "react";
import { motion } from 'framer-motion';

const Header = ({userName, subtitle}) => {
   useEffect(() => {
       document.title = `Olá, sou ${userName}`;
   }, [userName]);

    return (
        <header className="jumbotron text-center text-white rounded-bottom d-flex justify-content-center background-image container-fluid">
            <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                <motion.div
                animate={{x: 4}}
                transition={{type: "spring", stiffness: 100}}
                className="centralizar-text"
                >
                <h1 className="display-4 border-bottom">Olá, sou {userName}</h1>
                <p className="lead">{subtitle}</p>        
              
                </motion.div>    
            </div>
        </header>
    );
}

export default Header;