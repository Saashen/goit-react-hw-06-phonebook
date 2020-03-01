import { connect } from 'react-redux';
import * as pbActions from '../../redux/phonebook/phonebookActions';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  contacts: state.phonebook.contacts,
});

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(pbActions.addContact(contact)),
  getContactFromLS: contacts => dispatch(pbActions.getContactFromLS(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
