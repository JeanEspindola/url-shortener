import { connect } from 'react-redux';
import LinkList from './LinkList';
import { listFetchData } from '../../actions/linkListActions';

const mapStateToProps = state => ({
  items: state.listItems,
  isLoading: state.listIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(listFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);
