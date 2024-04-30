import React, { useState, useEffect } from 'react';

function EfeitoDigitacao({ frase, velocidadeDigitacao }) {
    const [textoExibido, setTextoExibido] = useState('');
    const [indiceAtual, setIndiceAtual] = useState(0);

    useEffect(() => {
        const intervaloDigitacao = setInterval(() => {
            if (indiceAtual === frase.length) {
                clearInterval(intervaloDigitacao);
                setTimeout(() => {
                    setTextoExibido('');
                    setIndiceAtual(0);
                }, 500); // Tempo de pausa antes de reiniciar o efeito
            } else {
                setTextoExibido(prevTexto => prevTexto + frase[indiceAtual]);
                setIndiceAtual(prevIndice => prevIndice + 1);
            }
        }, velocidadeDigitacao);

        return () => clearInterval(intervaloDigitacao);
    }, [indiceAtual, frase, velocidadeDigitacao]);

    return (
        <div>
            <p>{textoExibido}</p>
        </div>
    );
}

export default EfeitoDigitacao;
