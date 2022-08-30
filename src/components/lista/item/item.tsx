import styles from "./Item.module.scss"
import {ITarefa} from '../../../types/tarefa'


interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada : ITarefa) => void
}
export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    } : Props ){
    // const {tarefa, tempo} = props
    return(
    <li className={`${styles.item} ${selecionado?styles.itemSelecionado:""} ${completado?styles.itemCompletado:""}`} onClick={() => !completado && selecionaTarefa({tarefa, tempo, selecionado, completado, id})}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
        {completado && <span className={completado?styles.concluido:""}></span>}
    </li>
    )
    }
