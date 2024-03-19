import React, { useState } from 'react';

import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Classificacao from './components/Classificacao';

function App() {
  const [imc, setIMC] = useState(null);

  const calcularIMC = (altura, peso) => {
    const alturaMetros = altura / 100;
    const calculoIMC = peso / (alturaMetros * alturaMetros);
    setIMC(calculoIMC.toFixed(2));
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <h1 className="title">Cálculo IMC</h1>
        </header>
        <form className="form">
          <Formulario onCalcular={calcularIMC} />
          {imc && (
            <div>
              <Resultado imc={imc} />
              <Classificacao imc={imc} />
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
