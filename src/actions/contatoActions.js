export const adicionarContato = (contato) => ({
    type: 'ADICIONAR_CONTATO',
    payload: contato
  });

export const removerContato = (id) => ({
  type: 'REMOVER_CONTATO',
  payload: id
});
  
export const editarContato = (id, updates) => ({
  type: 'EDITAR_CONTATO',
  payload: { id, updates }
});