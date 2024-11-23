const initialState = {
    contatos: []
  };
  
  const contatosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADICIONAR_CONTATO':
        return {
          ...state,
          contatos: [...state.contatos, action.payload]
        };
      case 'REMOVER_CONTATO':
        return {
          ...state,
          contatos: state.contatos.filter(contato => contato.id !== action.payload)
        };
      case 'EDITAR_CONTATO':
        return {
          ...state,
          contatos: state.contatos.map(contato =>
            contato.id === action.payload.id ? { ...contato, ...action.payload.updates } : contato
          )
        };
      default:
        return state;
    }
  };
  
  export default contatosReducer;