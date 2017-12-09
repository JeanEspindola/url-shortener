import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LinkList extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.shortCode}>
            {item.shortCode} {item.url}
          </li>
        ))}
      </ul>
    );
  }
}

LinkList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default LinkList;
