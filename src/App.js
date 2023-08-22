import React, { useState, useEffect } from 'react';
import Publicaciones from './Publicaciones';
import Footer from './Footer';

const frasesMotivacionales = [
  "¡Nunca dejes de creer en ti mismo!",
  "El éxito llega a quienes trabajan duro y nunca se rinden.",
  "Cada día es una oportunidad para ser mejor que ayer.",
  "Confía en el proceso, los resultados llegarán.",
  "Tu actitud determina tu dirección.",
  "La única forma de hacer un gran trabajo es amar lo que haces.",
];

function App() {
  const [filtro, setFiltro] = useState('');
  const [fraseMotivacional, setFraseMotivacional] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * frasesMotivacionales.length);
    setFraseMotivacional(frasesMotivacionales[randomIndex]);
  }, [filtro]);

  return (
    <div className='Main'>
      <div className='div__header'>
        <h1 className='h1__inspiration' id='top'>Inspiration Zone</h1>
        <p>¿Qué quieres ver hoy?</p>
        <br />
        <div className='div__options'>
          <button onClick={() => setFiltro('memes')}>Memes</button>
          <button onClick={() => setFiltro('poses')}>Poses</button>
          <button onClick={() => setFiltro('bocetos')}>Bocetos</button>
          <button onClick={() => setFiltro('eyecat-makeup')}>Eye Makeup</button>
          <button onClick={() => setFiltro('steampunk-woman')}>Steampunk Woman</button>
        </div>
      </div>
      {filtro === '' ? <p style={{ color: 'white' }} id='randomMessage'>{fraseMotivacional}</p> : <Publicaciones filtro={filtro} />}
      <Footer />
    </div>
  );
}

export default App;
