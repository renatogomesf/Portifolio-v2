import React from "react";

import styles from './Contatos.module.css'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function Contatos() {

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
                        renato.gfe.dev@gmail.com
                        </p>
                        
                        <a href="mailto:renato.gfe.dev@gmail.com">
                            <button className={styles.btn_enviar}>
                                <IoIosSend className={styles.icon_enviar}/>
                                <p>Enviar e-mail</p>
                            </button>
                        </a>
                    </div>
                    <hr className={styles.linha} />
                </div>
                
                <div className={styles.email}>
                    <div className={styles.link}>
                        <MdEmail className={styles.icon_email} />
                        <p className="texto_email">
                            renato_gfe@hotmail.com
                        </p>
                        
                        <a href="mailto:renato_gfe@hotmail.com">
                            <button className={styles.btn_enviar}>
                                <IoIosSend className={styles.icon_enviar}/>
                                <p>Enviar e-mail</p>
                            </button>
                        </a>
                    </div>
                    <hr className={styles.linha} />
                </div>

            </div>
        </section>
    )
}