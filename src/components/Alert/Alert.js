import React from 'react';
import PropTypes from 'prop-types';
import styles from './Alert.module.css';

const Alert = ({ isAlert }) => (
  <span className={isAlert ? styles.ShowAlert : styles.HideAlert}>
    Contact already exists!
  </span>
);

Alert.propTypes = {
  isAlert: PropTypes.bool.isRequired,
};

export default Alert;
