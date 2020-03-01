import { connect } from 'react-redux';
import App from './App';
import * as pbActions from '../../redux/phonebook/phonebookActions';

const mapStateToProps = state => {
  console.log(state.contacts);
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = dispatch => ({
  getContactFromLS: contacts => dispatch(pbActions.getContactFromLS(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
