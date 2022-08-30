import React from "react"
import Botao from "../botao/index"
import styles from "./Formulario.module.scss"
import {ITarefa} from '../../types/tarefa'
import { v4 as uuidv4 } from "uuid"
class Formulario extends React.Component<{
    setTarefas:React.Dispatch<React.SetStateAction<ITarefa[]>>}>
{
    state = {
        tarefa:"",
        tempo:"00:00"
    }
    adicionarTarefa(evt:React.FormEvent<HTMLFormElement>){
        evt.preventDefault()
        this.props.setTarefas(tarefas =>
             [
                ...tarefas, 
                {
                    id:uuidv4(),
                    ...this.state, 
                    selecionado:false, 
                    completado:false
                }
            ]
            )
        this.setState({
            tarefa:"",
            tempo:"00:00"
        })
    }   
    render(){
        return(
            <form className={styles.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={styles.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione uma tarefa
                    </label>
                        <input
                        value={this.state.tarefa}
                        onChange={evt=> this.setState({...this.state, tarefa:evt.target.value})}
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="o que você quer estudar"
                        required
                        />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="tempo">
                        tempo
                    </label>
                        <input
                        value={this.state.tempo}
                        onChange={evt => this.setState({...this.state, tempo:evt.target.value})}
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                        />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }
}
export default Formulario