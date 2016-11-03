import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
    Modal.setAppElement(document.body)
    let store;
    if (window.currentUser) {
      store = configureStore({session: {currentUser: window.currentUser}})
    } else {
      store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

    window.store = store
});
