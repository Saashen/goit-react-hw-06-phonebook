import { connect } from 'react-redux';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(ContactList);
