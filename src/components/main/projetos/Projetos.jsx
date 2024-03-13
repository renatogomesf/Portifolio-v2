import React from "react";
import styles from './Projetos.module.css'

import JOGO_PERGUNTA from './img/jogo de perguntas.png'
import CALCULADORA from './img/calculadora.png'
import LISTA from './img/lista.png'

import HTML from '../habilidades/img/html.png'
import CSS from '../habilidades/img/css.png'
import JAVASCRIPT from '../habilidades/img/javascript.png'

export default function Projetos() {
    return (
        <section id="projetos" className={styles.projetos}>
            <h3 className={styles.titulo}>Projetos</h3>
            <div className={styles.criaçoes}>

                <div className={styles.projeto01}>

                    <a href="https://renatogomesf.github.io/Perguntas-e-Respostas/" target="_blank">
                        <img className={styles.img_projeto} src={JOGO_PERGUNTA} alt="jogo de perguntas"/>
                    </a>

                    <div className={styles.descriçao01}>
                        <h4 className={styles.nome}>Perguntas e Respostas.</h4>
                        <p>Jogo de conhecimentos gerais de múltiplas escolhas na qual só existe uma correta.</p>
                        <p>Tecnologias usadas:</p>
                        <div className={styles.tecnologias}>
                            <img className={styles.tecnologia} src={HTML} alt="html"/>
                            <img className={styles.tecnologia} src={CSS} alt="css"/>
                            <img className={styles.tecnologia} src={JAVASCRIPT} alt="javascript"/>
                        </div>
                        <a href="https://github.com/renatogomesf/Perguntas-e-Respostas" target="_blank">
                            <button className={styles.ver_codigo}>Ver código.</button>
                        </a>
                    </div>

                </div>

                <div className={styles.projeto02}>

                    <a href="https://renatogomesf.github.io/Calculadora/" target="_blank">
                        <img className={styles.img_projeto} src={CALCULADORA} alt="app calculadora"/>
                    </a>

                    <div className={styles.descriçao02}>
                        <h4 className={styles.nome}>Calculadora.</h4>
                        <p>Aplicativo para efetuar calculos simples e rápidos.</p>
                        <p>Tecnologias usadas:</p>
                        <div className={styles.tecnologias}>
                            <img className={styles.tecnologia} src={HTML} alt="html"/>
                            <img className={styles.tecnologia} src={CSS} alt="css"/>
                            <img className={styles.tecnologia} src={JAVASCRIPT} alt="javascript"/>
                        </div>
                        <a href="https://github.com/renatogomesf/Calculadora" target="_blank">
                            <button className={styles.ver_codigo}>Ver código.</button>
                        </a>
                    </div>

                </div>

                <div className={styles.projeto03}>

                    <a href="https://renatogomesf.github.io/Lista/" target="_blank">
                        <img className={styles.img_projeto} src={LISTA} alt="app lista"/>
                    </a>

                    <div className={styles.descriçao03}>
                        <h4 className={styles.nome}>Lista.</h4>
                        <p>Aplicativo para armazenar informações no geral, em forma de lista.</p>
                        <p>Tecnologias usadas:</p>
                        <div className={styles.tecnologias}>
                            <img className={styles.tecnologia} src={HTML} alt="html"/>
                            <img className={styles.tecnologia} src={CSS} alt="css"/>
                            <img className={styles.tecnologia} src={JAVASCRIPT} alt="javascript"/>
                        </div>
                        <a href="https://github.com/renatogomesf/Lista" target="_blank">
                            <button className={styles.ver_codigo}>Ver código.</button>
                        </a>
                    </div>

                </div>
                
            </div>
        </section>
    )
}