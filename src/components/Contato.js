import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

// Paleta de cores moderna (exemplo)
const colors = {
  primary: '#4CAF50',
  secondary: '#f1f1f1',
  text: '#333',
};

// Estilos utilizando Styled Components
const Container = styled.div`
  display: flex; /* Add flexbox for parent container */
  justify-content: center; /* Center the content horizontally */
`;

const ContatoContainer = styled.div`
  background-color: ${colors.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  max-width: 400px;

`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InfoText = styled.p`
  margin: 0.5rem 0;
  color: ${colors.text};
`;

const ModalContent = styled.div`
  background-color: ${colors.secondary};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${colors.text};
`;

const Button = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;
`;

function Contato({ nome, email, telefone, onRemove, onEdit }) {
  const [showModal, setShowModal] = useState(false);
  const [editedNome, setEditedNome] = useState(nome);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedTelefone, setEditedTelefone] = useState(telefone);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleSaveEdit = () => {
    const updates = {
      nome: editedNome,
      email: editedEmail,
      telefone: editedTelefone,
    };
    onEdit(updates);
    setShowModal(false);
  };

  const handleRemove = () => {
    onRemove();
  };

  return (
    <Container>
      <ContatoContainer>
        <InfoContainer>
          <InfoText>{nome}</InfoText>
          <InfoText>{email}</InfoText>
          <InfoText>{telefone}</InfoText>
        </InfoContainer>
        <Button onClick={handleRemove}>Remover</Button>
        <Button onClick={handleEditClick}>Editar</Button>
      </ContatoContainer>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Modal de Edição"
      >
        <ModalContent>
          <label>
            Nome:
            <input
              type="text"
              value={editedNome}
              onChange={(e) => setEditedNome(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
          </label>
          <label> 1 
            Telefone:
            <input
              type="tel"
              value={editedTelefone}
              onChange={(e) => setEditedTelefone(e.target.value)}
            />
          </label>
          <Button onClick={handleSaveEdit}>Salvar</Button>
          <Button onClick={() => setShowModal(false)}>Cancelar</Button>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default Contato;