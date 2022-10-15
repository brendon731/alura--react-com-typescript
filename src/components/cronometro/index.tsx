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
    const [tempo, setTempo] = useState<number>()
    const [isPaused, setIsPaused] = useState<boolean>(true)

    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(TempoParaSegundos(selecionado.tempo))
        }
    },[selecionado])
    
    useEffect(()=>{
        let r = setTimeout(() => {
            if(!tempo){
                finalizarTarefa()
                setIsPaused(true)
                return
            } 
            if(isPaused) return
            setTempo(tempo - 1)
        }, 1000)

    },[tempo, isPaused])
    
    return (
        <div className={styles.cronometro}>
            <p className={styles.relogioTitulo}>Escolha um card e inicie o cronometro</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo}/>

            </div>
            <Botao onClick={()=>setIsPaused(!isPaused)}>{isPaused?"Iniciar":"Parar"}</Botao>
        </div>
    )
}