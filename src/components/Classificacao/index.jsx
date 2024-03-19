import React from 'react';
import styles from './Classificacao.module.css';

const Classificacao = ({ imc }) => {
    const classificarIMC = () => {
        if (imc < 18.5) return 'Magreza';
        if (imc >= 18.5 && imc <= 24.9) return 'Peso Normal';
        if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
        if (imc >= 30 && imc <= 39.9) return 'Obesidade';
        return 'Obesidade Grave';
    };

    const classificacao = classificarIMC();
    const classificacaoStyle = styles[classificacao.toLowerCase().replace(' ', '-')];

    return (
        <div className={styles.container}>
            <h3 className={`${styles.classificacao} ${classificacaoStyle}`}>Você está classificado como: {classificacao}</h3>
        </div>
    );
};

export default Classificacao;


