import React from "react";
import Apresentaçao from "./apresentacao/Apresentaçao";
import Sobre from "./sobre/Sobre";

import styles from './Main.module.css'

export default function Main() {
    return (
        <main className={styles.main}>
            <Apresentaçao></Apresentaçao>
            <Sobre></Sobre>
        </main>
    )
}