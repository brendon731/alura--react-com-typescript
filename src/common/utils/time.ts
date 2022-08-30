export default function TempoParaSegundos(tempo : String){
    const [horas="0", minutos="0", segundos] = tempo.split(":")
    const horasParaSegundos = Number(horas) * 3600
    const MinutosParaSegundos = Number(minutos) * 60
    return horasParaSegundos + MinutosParaSegundos + Number(segundos)
}