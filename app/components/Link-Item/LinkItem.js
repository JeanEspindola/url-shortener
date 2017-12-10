import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const shortCodeStyle = {
  color: '#EB4A42',
};

const urlStyle = {
  color: '#AAAAAA',
};

const shortenedPrefixStyle = {
  color: '#555555',
};

const itemStyle = {
  marginBottom: 10,
};

class LinkItem extends Component {
  render() {
    return (
      <div className="linkItem" style={itemStyle}>
        <Row className="linkItem__shortened">
          <Col xs={12}>
            <span style={shortenedPrefixStyle}>https://impraise-shorty.herokuapp.com/</span>
            <span style={shortCodeStyle}>{this.props.shortCode}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="linkItem__url">
            <span style={urlStyle}>{this.props.url}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

LinkItem.propTypes = {
  shortCode: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default LinkItem;
