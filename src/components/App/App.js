import React from 'react';
import styles from './App.module.css';

import ContactForm from '../ContactForm/ContactFormContainer';
import Filter from '../Filter/FilterContainer';
import ContactList from '../ContactList/ContactListContainer';

const App = () => (
  <div className={styles.App}>
    <h1 className={styles.Phonebook}>Phonebook</h1>
    <ContactForm />
    <h1 className={styles.Contacts}>Contacts</h1>
    <Filter />
    <ContactList />
  </div>
);

export default App;
