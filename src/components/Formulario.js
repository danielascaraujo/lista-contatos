import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { adicionarContato } from '../actions/contatoActions';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f1f1f1; /* Light background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex-grow: 1; /* Allow inputs to expand */
  margin-left: 10px; /* Space between label and input */
`;

const Button = styled.button`
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out; /* Smooth hover effect */

  &:hover {
    background-color: #3e8e41; /* Darker green on hover */
  }
`;

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoContato = { nome, email, telefone };
    dispatch(adicionarContato(novoContato));
    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Nome:
        <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </Label>
      <Label>
        Email:
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Label>
      <Label>
        Telefone:
        <Input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      </Label>
      <Button type="submit">Adicionar Contato</Button>
    </FormContainer>
  );
}

export default Formulario;