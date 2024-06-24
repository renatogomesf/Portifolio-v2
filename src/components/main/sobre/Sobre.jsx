import React from "react";
import Fala from './img/fala.png'
import Curriculo from './pdf/Currículo_Renato_Gomes_Ferreira.pdf'

import styles from './Sobre.module.css'

export default function Sobre() {
    return (
        <section id="sobremim" className={styles.sobreMim}>
            <h3 className={styles.titulo}>Sobre mim</h3>
            <div className={styles.img_texto}>
                <img className={styles.fala} src={Fala} alt="fala" />
                <div className={styles.paragrafos}>
                    
                    <p className={styles.paragrafo}>
                        Oi! Sou <strong>Renato Gomes</strong>, tenho 27 anos e moro em Fortaleza - Ceará. Sou <strong>Desenvolverdor Full Stack</strong>, onde possuo 1 ano de estudos em front-end e 3 meses de estudos em <strong>Back-End + Banco de dados.</strong> Tudo o que eu aprendi foi de forma independente e através do YouTube, com o professor Gustavo Guanabara, do canal Curso em Video, onde aprendi <strong>HTML 5, CSS 3</strong> e o básico de JavaScript e com o Bruno Campos, do canal CFBCursos, onde aprendi mais a fundo <strong>JavaScript</strong> e aprendi do zero <strong>React.js, Node.js e MySQL.</strong>
                    </p>

                    <p className={styles.paragrafo}>
                        <strong>Gosto muito de tecnologia,</strong> adoro por a mão na massa, sou uma pessoa bem curiosa e gosto muito de saber como as coisas funcionam e aprender como se faz. Com a web não foi diferente, então fui atrás de saber como funcionava e me deparei com o mundo da programação. Foi difícil no começo, mas continuo <strong>evoluindo dia após dia.</strong>
                    </p>

                    <div className={styles.curriculo}>
                        <a href={Curriculo} target="_blank">
                            <button className={styles.ver_curriculo}>Ver curriculo</button>
                        </a>

                        <a href={Curriculo}download="Currículo_Renato_Gomes_Ferreira.pdf">
                            <button className={styles.baixar_curriculo}>Baixar curriculo</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}