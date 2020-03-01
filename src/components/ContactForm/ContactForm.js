import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import uuid from 'uuid/v4';
import styles from './ContactForm.module.css';
import slideAlertTransition from '../../transitions/slideAlert.module.css';

import Alert from '../Alert/Alert';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    isAlert: false,
  };

  id = {
    nameId: uuid(),
    numberId: uuid(),
  };

  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ).isRequired,
  };

  isInContactList = (contact, name) =>
    this.props.contacts.find(c => c.name.toLowerCase() === name.toLowerCase())
      ? this.setState({ isAlert: true })
      : this.props.onAddContact({ ...contact });

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const contact = {
      id: uuid(),
      name,
      number,
    };

    if (name === '' || number === '') {
      return;
    }

    this.isInContactList(contact, name);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number, isAlert } = this.state;
    const { nameId, numberId } = this.id;

    return (
      <>
        <CSSTransition
          in={isAlert}
          timeout={250}
          classNames={slideAlertTransition}
          unmountOnExit
          onEntered={() =>
            setTimeout(() => this.setState({ isAlert: false }), 1500)
          }
        >
          <Alert />
        </CSSTransition>
        <form className={styles.Form} onSubmit={this.handleSubmit}>
          <label className={styles.Label} htmlFor={nameId}>
            <span className={styles.Caption}>Name</span>
            <input
              className={styles.Input}
              type="text"
              onChange={this.handleChange}
              value={name}
              name="name"
              id={nameId}
            />
          </label>
          <label className={styles.Label} htmlFor={numberId}>
            <span className={styles.Caption}>Number</span>
            <input
              className={styles.Input}
              type="text"
              onChange={this.handleChange}
              value={number}
              name="number"
              id={numberId}
            />
          </label>
          <button className={styles.Button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
