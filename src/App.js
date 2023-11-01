import React from 'react'; // Certifique-se de importar o React se ainda não estiver importado
import './App.css'; // Certifique-se de importar o arquivo CSS se ainda não estiver importado
import logo from './logo192.png';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ marginBottom: '50px' }} />
        <p>
          Editado <code>Por</code> Yok444i.BR
        </p>
        <a
          className="App-link"
          href="https://github.com/Kayo444"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acesse meu Git!
        </a>
      </header>
    </div>
  );
}

export default App;
