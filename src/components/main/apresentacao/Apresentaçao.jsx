import React from 'react';
import styles from './Apresentaçao.module.css'
import Dev from './img/dev.png'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Apresentaçao() {
    return (
        <>
            <div className={styles.apresentaçao}>
                <div className={styles.texto}>
                    <p>Olá, meu nome é</p>
                    <h1 className={styles.nome}>Renato Gomes.</h1>
                    <h2 className={styles.profissao}>Desenvolvedor Front-End.</h2>
                    <div className={styles.contatos}>
                        <a href="https://github.com/renatogomesf" target='blanck'>
                            <FaGithub className={styles.contato} />
                        </a>
                        <a href="https://www.linkedin.com/in/renato-gomes-22b759236/" target='blanck'>
                            <FaLinkedin className={styles.contato} />
                        </a>
                    </div>
                </div>
                <img className={styles.dev} src={Dev} alt="dev" />
            </div>
        </>
    )
}