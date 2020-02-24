import React from 'react';
import styles from './Filter.module.css';

const Filter = () => (
  <section className={styles.Filter}>
    <span className={styles.Caption}>Find contacts</span>
    <input className={styles.Input} type="text" />
  </section>
);

export default Filter;
