import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './ContactList.module.css';

import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => (
  <ul className={styles.Contacts}>
    {contacts.map(contact => (
      <ContactListItem
        name={contact.name}
        number={contact.number}
        id={contact.id}
        className={styles.Contact}
        key={contact.id}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(ContactList);
