import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  contacts: state.phonebook.contacts,
});

export default connect(mapStateToProps)(App);
