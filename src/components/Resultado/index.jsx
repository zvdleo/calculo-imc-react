import React from 'react';
import styles from './Resultado.module.css';

const Resultado = ({ imc }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.result}>Seu IMC é: {imc}</h2>
        </div>
    );
};

export default Resultado;
