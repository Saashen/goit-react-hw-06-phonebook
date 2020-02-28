import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebookActions';
import ContactListItem from './ContactListItem';

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
