

import { createStore } from 'redux';

let localStore = window.localStorage.getItem('store');

if (localStore) {
  localStore = JSON.parse(localStore);
} else {
  window.localStorage.setItem('store', JSON.stringify({}));
  localStore = {
    sports: {},
  };
}


// Centralized application state
// For more information visit http://redux.js.org/
const store = createStore((state, action) => {
  // TODO: Add action handlers (aka "reduces")
  switch (action.type) {
    case 'localStorage':
      localStore = { ...localStore, ...action };
      window.localStorage.setItem('store', JSON.stringify(localStore));
      return { ...localStore, ...state, ...action };
    default:
      return { ...localStore, ...state, ...action };
  }
});

export default store;
