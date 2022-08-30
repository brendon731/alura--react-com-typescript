import React from "react"
import styles from "./Lista.module.scss"
import Item from "../lista/item/item"
import { ITarefa } from "../../types/tarefa"

interface Props{
    tarefas:ITarefa[],
    selecionaTarefa: (tarefaSelecionada : ITarefa) => void
}
export default function Lista({tarefas, selecionaTarefa} : Props){
   
    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => <Item key={item.id} selecionaTarefa={selecionaTarefa} {...item}/>)}
            </ul>
        </aside>
    )
}

