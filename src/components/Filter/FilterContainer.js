import { connect } from 'react-redux';
import * as pbActions from '../../redux/phonebook/phonebookActions';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: state.phonebook.filter,
  contacts: state.phonebook.contacts,
});

const mapDispatchToProps = dispatch => ({
  onFilter: e => dispatch(pbActions.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
