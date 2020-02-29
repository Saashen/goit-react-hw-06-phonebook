import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';
import transformTransition from '../../transitions/transform.module.css';

const Filter = ({ contacts, filter, onFilter }) => (
  <CSSTransition
    in={contacts.length > 1}
    timeout={250}
    classNames={transformTransition}
    unmountOnExit
  >
    <section className={styles.Filter}>
      <span className={styles.Caption}>Find contacts</span>
      <input
        className={styles.Input}
        type="text"
        value={filter}
        onChange={onFilter}
      />
    </section>
  </CSSTransition>
);

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
