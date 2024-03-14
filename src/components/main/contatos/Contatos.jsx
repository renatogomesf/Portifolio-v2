import React from "react";

import styles from './Contatos.module.css'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Contatos() {

    const btn_copiar = document.getElementsByClassName(styles.btn_copiar)
    const texto_email = document.getElementsByClassName("texto_email")

    btn_copiar[0].addEventListener("click",()=>{
        navigator.clipboard.writeText(texto_email[0].innerHTML)
    })

    return (
        <section id="contatos" className={styles.contatos}>

            <h3 className={styles.titulo}>Contatos</h3>

            <div className={styles.contato}>
                    
                <div className={styles.redes}>
                    <div className={styles.github}>
                        <a className={styles.link} href="https://github.com/renatogomesf" target='blanck'>
                            <FaGithub className={styles.icon} />

                            <p>github.com</p>

                            <button className={styles.btn_link}>
                                <FaExternalLinkAlt />
                            </button>
                        </a>
                        <hr className={styles.linha} />
                    </div>

                    <div className={styles.linkedin}>
                        <a className={styles.link} href="https://www.linkedin.com/in/renato-gomes-22b759236/" target='blanck'>
                            <FaLinkedin className={styles.icon} />

                            <p>linkedin.com</p>

                            <button className={styles.btn_link}>
                                <FaExternalLinkAlt />
                            </button>
                        </a>
                        <hr className={styles.linha} />
                    </div>
                </div>

                <div className={styles.email}>
                    <div className={styles.link}>
                        <MdEmail className={styles.icon_email} />
                        <p className="texto_email">
                            renato_gfe@hotmail.com
                        </p>
                        
                        <button className={styles.btn_copiar}>
                            <FaCopy className={styles.icon_copiar}/> 
                            <p>Copiar e-mail</p>
                        </button>
                    </div>
                    <hr className={styles.linha} />
                </div>

            </div>
        </section>
    )
}