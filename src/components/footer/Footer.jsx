import React from "react";
import REACT from './img/react.png'
import JAVASCRIPT from './img/javascript.png'
import CSS from './img/css.png'

import styles from './Footer.module.css'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <hr className={styles.linha} />

            
            <div className={styles.footer}>

                <div className={styles.info_portifolio}>
                    <p>Tecnologias utilizadas no portifólio: </p>
                    <div className={styles.tecnologias}>
                        <img className={styles.tecnologia} src={REACT} alt="logo react" />
                        <img className={styles.tecnologia} src={JAVASCRIPT} alt="logo javascript" />
                        <img className={styles.tecnologia} src={CSS} alt="logo css" />
                    </div>
                </div>

                <div className={styles.contatos}>
                    
                    <a href="https://github.com/renatogomesf" target='blanck'>
                        <FaGithub className={styles.contato} />
                    </a>

                    <a href="https://www.linkedin.com/in/renato-gomes-22b759236/" target='blanck'>
                        <FaLinkedin className={styles.contato} />
                    </a>

                </div>

            </div>

            <div className={styles.copy}>
                <p>&copy; 2024 Renato Gomes</p>
            </div>

        </footer>
    )
}