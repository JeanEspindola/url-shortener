import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import LinkItem from '../Link-Item/LinkItem';

const textStyle = {
  color: '#555555',
  fontSize: 22,
};

const tableHeadingStyle = {
  color: '#BFBFBF',
  fontSize: 14,
  marginBottom: 10,
  textTransform: 'uppercase',
};

const titleStyle = {
  marginBottom: 10,
};

class LinkList extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.isLoading) {
      return (
        <Row>
          <Col xs={12}><p style={textStyle}>Loading Generated Links…</p></Col>
        </Row>
      );
    }

    if (this.props.items.length === 0) {
      return (
        <Row>
          <Col xs={12}><p style={textStyle}>There are no links previously shortened.</p></Col>
        </Row>
      );
    }

    return (
      <div className="linkList">
        <Row className="linkList_title" style={titleStyle}>
          <Col xs={12}>
            <p style={textStyle}>Previously Shortened by you.</p>
          </Col>
        </Row>
        <Row className="linkList_tableHeading" style={tableHeadingStyle}>
          <Col xs={8}>
            <span>Link</span>
          </Col>
          <Col xs={2}>
            <span>Visits</span>
          </Col>
          <Col xs={2}>
            <span>Last Visited</span>
          </Col>
        </Row>
        {this.props.items.map(item => (
          <div key={item.shortCode}>
            <LinkItem shortCode={item.shortCode} url={item.url} />
          </div>
        ))}
      </div>
    );
  }
}

LinkList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default LinkList;
