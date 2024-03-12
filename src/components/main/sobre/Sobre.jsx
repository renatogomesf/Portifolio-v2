import React from "react";
import Fala from './img/fala.png'

import styles from './Sobre.module.css'

export default function Sobre() {
    return (
        <section className={styles.sobreMim}>
            <h3 className={styles.titulo}>Sobre mim</h3>
            <div className={styles.img_texto}>
                <img className={styles.fala} src={Fala} alt="fala" />
                <div className={styles.paragrafos}>
                    <p className={styles.paragrafo}>Oi! Sou Renato Gomes, tenho 26 anos e moro em Fortaleza - Ceará. Sou um Desenvolverdor Front-End e possuo 6 meses de estudos na área. Tudo o que eu aprendi foi sozinho e através do YouTube, com o professor Gustavo Guanabara, do canal Curso em Video, onde apredi HTML 5, CSS 3 e o básico de JavaScript e com o Bruno Campos, do canal CFBCursos, onde aprendi mais a fundo JavaScript.</p>

                    <p className={styles.paragrafo}>Gosto muito de tecnologia, adoro por a mão na massa, sou uma pessoa bem curiosa e gosto muito de saber como as coisas funcionam e aprender como se faz. Com a web não foi diferente, então fui atrás de saber como funcionava e me deparei com o mundo da programação. Foi difícil no começo, mas continuo evoluindo dia após dia.</p>

                    <div className={styles.curriculo}>
                            <a href="pdf/Currículo_Renato_Gomes_Ferreira.pdf" target="_blank">
                                <button className={styles.ver_curriculo}>Ver curriculo</button>
                            </a>

                            <a href="pdf/Currículo_Renato_Gomes_Ferreira.pdf" download="Currículo_Renato_Gomes.pdf">
                                <button className={styles.baixar_curriculo}>Baixar curriculo</button>
                            </a>
                        </div>
                    </div>
            </div>
        </section>
    )
}