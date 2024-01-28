import { useState } from "react";
import './RelogioApp.css'
import './Responsivo.css'

export default function RelogioApp(){
    let time = new Date();

    const [hora, setHora] = useState(time.getHours())
    const [minuto, setMinuto] = useState(time.getMinutes())
    const [segundo, setSegundo] = useState(time.getSeconds())

    function UpdateTime(){
        time = new Date();
        setHora(time.getHours())
        setMinuto(time.getMinutes())
        setSegundo(time.getSeconds())
    }

    setInterval(UpdateTime, 1000)
    return (
        <>
        <div className="relogio">
            <div className="containers">
                <h1 className="horarios">{hora}</h1>
                <h3 className="nomes">Horas</h3>
            </div>
            <div className="containers">
                <h1 className="horarios">{minuto}</h1>
                <h3 className="nomes">Minutos</h3>
            </div>
            <div className="containers">
                <h1 className="horarios">{segundo}</h1>
                <h3 className="nomes">Segundos</h3>
            </div>        
        </div>
        </>
    )
}