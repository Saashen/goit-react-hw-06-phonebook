import { connect } from 'react-redux';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: state.phonebook.contacts,
  filter: state.phonebook.filter,
});

export default connect(mapStateToProps)(ContactList);
