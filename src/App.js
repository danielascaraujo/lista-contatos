import React from 'react';
import ListaContatos from './components/ListaContatos';
import Formulario from './components/Formulario';

function App() {
  return (
    <div>
      <h1>Lista de Contatos</h1>
      <Formulario />
      <ListaContatos />
    </div>
  );
}

export default App;