import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id, onDeleteContact }) => (
  <li>
    <span>
      {name}: {number}
    </span>
    <button
      className={styles.button}
      type="button"
      onClick={() => onDeleteContact(id)}
    />
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
