import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { listFetchData } from '../../actions/linkListActions';

class LinkList extends Component {

  componentDidMount() {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  render() {
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>
            {item.label}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.listItems,
    isLoading: state.listIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: url => dispatch(listFetchData(url)),
  };
};

LinkList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);