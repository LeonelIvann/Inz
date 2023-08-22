import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Footer() {
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/repos/LeonelIvann/Inz/contributors')
      .then(response => {
        setColaboradores(response.data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <footer className="footer">
      <div className="footer__content">
        <h3>Colaboradores en GitHub</h3>
        <ul className="colaboradores">
          {colaboradores.map(colaborador => (
            <li key={colaborador.id}>
              <a href={colaborador.html_url} target="_blank" rel="noopener noreferrer">
                {colaborador.login}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
