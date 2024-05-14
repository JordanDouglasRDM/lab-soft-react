import './Relogio.css';
import React, { useEffect, useState } from "react";

function Relogio() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const horaFormatada = currentTime.toLocaleTimeString();
    const dataFormatada = currentTime.toLocaleDateString();

    return (
        <div className="Relogio">
            <h2>Data e Hora Atual:</h2>
            <p>{dataFormatada} - {horaFormatada}</p>
        </div>
    );
}

export default Relogio;
