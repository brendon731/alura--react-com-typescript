import styles from "./Relogio.module.scss"

interface Props{
    tempo:number | undefined
}
export default function Relogio({tempo = 0}:Props){
    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60
    
    const [minutosDezena, minutosUnidade] = String(minutos).padStart(2, "0")
    const [segundosDezena, segundosUnidade] = String(segundos).padStart(2, "0")

    return(
        <>
            <span className={styles.relogioNumero}>{minutosDezena}</span>
            <span className={styles.relogioNumero}>{minutosUnidade}</span>
            <span className={styles.relogioDivisao}>:</span>
            <span className={styles.relogioNumero}>{segundosDezena}</span>
            <span className={styles.relogioNumero}>{segundosUnidade}</span>
        </>
    )
}