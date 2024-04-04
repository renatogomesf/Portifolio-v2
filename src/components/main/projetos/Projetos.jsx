import React from "react";
import styles from './Projetos.module.css'

import LANDING_PAGE from './img/landing page.png'
import PAGINA_DE_RESORTS from './img/pagina-de-resorts.png'
import PORTIFOLIO_ANTIGO from './img/portifolio-antigo.png'
import JOGO_PERGUNTA from './img/jogo de perguntas.png'
import CALCULADORA from './img/calculadora.png'
import LISTA from './img/lista.png'

import HTML from '../habilidades/img/html.png'
import CSS from '../habilidades/img/css.png'
import JAVASCRIPT from '../habilidades/img/javascript.png'
import REACT from '../habilidades/img/react.png'
import TAILWIND from '../habilidades/img/tailwind.png'

export default function Projetos() {
    return (
        <section id="projetos" className={styles.projetos}>
            <h3 className={styles.titulo}>Projetos</h3>
            <div className={styles.criaçoes}>

                <div className={styles.projeto}>

                    <a href="https://renatogomesf.github.io/Landing-Page/" target="_blank">
                        <img className={styles.img_projeto} src={LANDING_PAGE} alt="Landing page"/>
                    </a>

                    <div className={styles.descriçao}>
                        <h4 className={styles.nome}>Landing page Restaurante.</h4>
                        <p>Página destinada a divulgar um determinado restaurante com foco em delivery.</p>
                        <p>Tecnologias usadas:</p>
                        <div className={styles.tecnologias}>
                            <img className={styles.tecnologia} src={REACT} alt="html"/>
                            <img className={styles.tecnologia} src={TAILWIND} alt="css"/>
                            <img className={styles.tecnologia} src={JAVASCRIPT} alt="javascript"/>
                        </div>
                        <a href="https://github.com/renatogomesf/Landing-Page" target="_blank">
                            <button className={styles.ver_codigo}>Ver código.</button>
                        </a>
                    </div>

                </div>

                <div className={styles.projeto}>

                    <a href="https://renatogomesf.github.io/Pagina-de-Resorts/" target="_blank">
                        <img className={styles.img_projeto} src={PAGINA_DE_RESORTS} alt="página de hoteis"/>
                    </a>

                    <div className={styles.descriçao}>
                        <h4 className={styles.nome}>Página de Resorts.</h4>
                        <p>Página destinada a facilitar a procura e a reserva de resorts na região desejada pelo usuário.</p>
                        <p>Tecnologias usadas:</p>
                        <div className={styles.tecnologias}>
                            <img className={styles.tecnologia} src={REACT} alt="html"/>
                            <img className={styles.tecnologia} src={TAILWIND} alt="css"/>
                            <img className={styles.tecnologia} src={JAVASCRIPT} alt="javascript"/>
                        </div>
                        <a href="https://github.com/renatogomesf/Pagina-de-Resorts" target="_blank">
                            <button className={styles.ver_codigo}>Ver código.</button>
                        </a>
                    </div>

                </div>

                <div className={styles.projeto}>

                    <a href="https://renatogomesf.github.io/Primeiro-Portifolio/" target="_blank">
                        <img className={styles.img_projeto} src={PORTIFOLIO_ANTIGO} alt="primeiro portifólio"/>
                    </a>

                    <div className={styles.descriçao}>
                        <h4 className={styles.nome}>Primeiro Portifólio.</h4>
                        <p>Portifólio criado após o término do curso de HTML e CSS. Posteriormente, foi adicionado JavaScript para dar função de abrir e fechar ao menu mobile.</p>
                        <p>Tecnologias usadas:</p>
                        <div className={styles.tecnologias}>
                            <img className={styles.tecnologia} src={HTML} alt="html"/>
                            <img className={styles.tecnologia} src={CSS} alt="css"/>
                            <img className={styles.tecnologia} src={JAVASCRIPT} alt="javascript"/>
                        </div>
                        <a href="https://github.com/renatogomesf/Portifolio" target="_blank">
                            <button className={styles.ver_codigo}>Ver código.</button>
                        </a>
                    </div>

                </div>

                <div className={styles.projeto}>

                    <a href="https://renatogomesf.github.io/Perguntas-e-Respostas/" target="_blank">
                        <img className={styles.img_projeto} src={JOGO_PERGUNTA} alt="jogo de perguntas"/>
                    </a>

                    <div className={styles.descriçao}>
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

                <div className={styles.projeto}>

                    <a href="https://renatogomesf.github.io/Calculadora/" target="_blank">
                        <img className={styles.img_projeto} src={CALCULADORA} alt="app calculadora"/>
                    </a>

                    <div className={styles.descriçao}>
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

                <div className={styles.projeto}>

                    <a href="https://renatogomesf.github.io/Lista/" target="_blank">
                        <img className={styles.img_projeto} src={LISTA} alt="app lista"/>
                    </a>

                    <div className={styles.descriçao}>
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