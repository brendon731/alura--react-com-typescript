import React, {useState} from 'react';
import Botao from "../components/botao/index"
import Formulario from "../components/formulario/index"
import Lista from '../components/lista';
import Cronometro from '../components/cronometro';

import styles from "./App.module.scss"
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa( tarefaSelecionada : ITarefa ){
    console.log(tarefaSelecionada)
    setSelecionado(tarefaSelecionada)
    // setTarefas(tarefas.map(tarefa=>tarefa.id===tarefaSelecionada.id?{...tarefa, selecionado:true}:{...tarefa, selecionado:false}))
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa=>({...tarefa, selecionado : tarefa.id === tarefaSelecionada.id})))

  }
  function finalizarTarefa(){
    if(selecionado){
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>{
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa, 
            selecionado:false,
            completado:true
          }
        }else{
          return tarefa
        }
      }))
    }
  }
  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
      selecionaTarefa={selecionaTarefa} 
      tarefas={tarefas}
      />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>

    </div>
  );
}

export default App;
