import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './ContactList.module.css';
import slideTransition from '../../transitions/slide.module.css';

import ContactListItem from '../ContactListItem/ContactListItemContainer';

const ContactList = ({ contacts, filter }) => {
  const filterContactsWithQuery = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return !filter.length ? (
    <TransitionGroup component="ul" className={styles.Contacts}>
      {contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          classNames={slideTransition}
          unmountOnExit
        >
          <ContactListItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
            key={contact.id}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  ) : (
    <TransitionGroup component="ul" className={styles.Contacts}>
      {filterContactsWithQuery().map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          classNames={slideTransition}
          unmountOnExit
        >
          <ContactListItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
            className={styles.Contact}
            key={contact.id}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
};

export default ContactList;
