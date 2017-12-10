import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import LinkItem from '../Link-Item/LinkItem';

const textStyle = {
  color: '#555555',
  fontSize: 22,
  //fontFamily: Roboto,
  //fontStyle: normal,
  //fontWeight: 300
};

const tableHeadingStyle = {
  color: '#BFBFBF',
  fontSize: 14,
  marginBottom: 10
};

const titleStyle = {
  marginBottom: 10
};

class LinkList extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.isLoading) {
      return (
        <Row>
          <Col md={12}><p style={textStyle}>Loading Generated Links…</p></Col>
        </Row>
      );
    }

    if (this.props.items.length === 0) {
      return (
        <Row>
          <Col md={12}><p style={textStyle}>There are no links previously shortened.</p></Col>
        </Row>
      );
    }

    return (
      <div className="linkList">
        <Row className="linkList_title" style={titleStyle}>
          <Col md={12}>
            <p style={textStyle}>Previously Shortened by you.</p>
          </Col>
        </Row>
        <Row className="linkList_tableHeading" style={tableHeadingStyle}>
          <Col md={6}>
            <span>LINK</span>
          </Col>
          <Col md={2}>
            <span>VISITS</span>
          </Col>
          <Col md={4}>
            <span>LAST VISITED</span>
          </Col>
        </Row>
        {this.props.items.map(item => (
          <div key={item.shortCode}>
            <LinkItem shortCode={item.shortCode} url={item.url}/>
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
