import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './App.module.css';

import slideContactsTransition from '../../transitions/slideContacts.module.css';
import slideLogoTransition from '../../transitions/slideLogo.module.css';

import ContactForm from '../ContactForm/ContactFormContainer';
import Filter from '../Filter/FilterContainer';
import ContactList from '../ContactList/ContactListContainer';

export default class App extends Component {
  state = { isLoaded: false };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string.isRequired }),
    ).isRequired,
    getContactFromLS: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.setState({ isLoaded: true });

    const contactsFromLS = localStorage.getItem('contacts');
    if (contactsFromLS) {
      const { getContactFromLS } = this.props;
      getContactFromLS(JSON.parse(contactsFromLS));
    }
  }

  render() {
    const { isLoaded } = this.state;
    const { contacts } = this.props;

    return (
      <div className={styles.App}>
        <CSSTransition
          in={isLoaded}
          timeout={500}
          classNames={slideLogoTransition}
        >
          <h1 className={styles.Phonebook}>Phonebook</h1>
        </CSSTransition>

        <ContactForm />
        <CSSTransition
          in={contacts.length > 0}
          timeout={500}
          classNames={slideContactsTransition}
          unmountOnExit
        >
          <h1 className={styles.Contacts}>Contacts</h1>
        </CSSTransition>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
