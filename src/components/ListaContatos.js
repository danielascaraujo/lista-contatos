import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removerContato, editarContato } from '../actions/contatoActions';
import Contato from './Contato';

function ListaContatos() {
  const contatos = useSelector(state => state.contatos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removerContato(id));
  };

  const handleEdit = (id, updates) => {
    dispatch(editarContato(id, updates));
  };

  return (
    <ul>
      {contatos.map(contato => (
        <li key={contato.id}>
          <Contato
            {...contato}
            onRemove={() => handleRemove(contato.id)}
            onEdit={(updates) => handleEdit(contato.id, updates)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ListaContatos;