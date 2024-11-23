import { createStore } from 'redux';
import contatosReducer from './reducers/contatosReducer';
export const store = createStore(contatosReducer);

