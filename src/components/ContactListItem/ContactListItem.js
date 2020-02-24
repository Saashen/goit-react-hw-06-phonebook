import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './ContactListItem.module.css';
import { deleteContact } from '../../redux/phonebookActions';

const ContactListItem = ({ name, number }) => (
  <li>
    <span>
      {name}: {number}
    </span>
    <button className={styles.button} type="button">
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: () => dispatch(deleteContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
