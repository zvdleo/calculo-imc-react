import React, { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = ({ onCalcular }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const handleCalcular = () => {
        if (altura && peso) {
            onCalcular(parseFloat(altura), parseFloat(peso));
        }
    };

    return (
        <form className={styles.container}>
            <div>
                <label htmlFor="altura" className={styles.label}>Altura (cm):</label>
                <input
                    type="number"
                    id="altura"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    className={styles.input}
                />
            </div>
            <div>
                <label htmlFor="peso" className={styles.label}>Peso (kg):</label>
                <input
                    type="number"
                    id="peso"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    className={styles.input}
                />
            </div>
            <button type="button" onClick={handleCalcular} className={styles.button}>
                Calcular IMC
            </button>
        </form>
    );
};

export default Formulario;
