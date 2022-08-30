import {useState, useEffect} from "react"
import Botao from "../botao/index"
import Relogio from "./Relogio/index"
import styles from "./Cronometro.module.scss"
import TempoParaSegundos from "../../common/utils/time"
import { ITarefa } from "../../types/tarefa"

interface Props{
    selecionado:ITarefa | undefined,
    finalizarTarefa:()=>void
}
export default function Cronometro({selecionado, finalizarTarefa}:Props){
    // console.log(TempoParaSegundos(selecionado))
    const [tempo, setTempo] = useState<number>()
    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(TempoParaSegundos(selecionado.tempo))
        }
    },[selecionado])

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if(contador>0){
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            else{
                finalizarTarefa()
            }
        }, 1000);
    }
    return (
        <div className={styles.cronometro}>
            <p className={styles.relogioTitulo}>Escolha um card e inicie o cronometro</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo}/>

            </div>
            <Botao onClick={()=>regressiva(tempo)}>Iniciar</Botao>
        </div>
    )
}