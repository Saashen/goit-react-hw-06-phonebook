import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onFilter }) => (
  <section className={styles.Filter}>
    <span className={styles.Caption}>Find contacts</span>
    <input
      className={styles.Input}
      type="text"
      value={filter}
      onChange={onFilter}
    />
  </section>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
