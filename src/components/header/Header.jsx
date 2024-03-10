import React from "react";
import Logo from './img/logo.png'

export default function Header() {
    return (
        <>
            <header className="topo">
                <div className="logo-nome">
                    <img className="logo" src={Logo} alt="logo" />
                    <div className="nome">
                        <span className="letra">R</span>
                        <span className="letra">D</span>
                        <span className="letra">E</span>
                        <span className="letra">V</span>
                    </div>
                </div>
                <nav>
                    <ul className="menu">
                        <li className="item">Sobre mim</li>
                        <li className="item">Habilidades</li>
                        <li className="item">Projetos</li>
                        <li className="item">Contato</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}