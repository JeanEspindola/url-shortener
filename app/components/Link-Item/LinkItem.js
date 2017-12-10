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

class LinkItem extends Component {
  render() {

    return (
      <div className="linkItem">
        <Row className="linkItem__shortened">
          <Col md={12}>
            <span style={shortenedPrefixStyle}>https://impraise-shorty.herokuapp.com/</span>
            <span style={shortCodeStyle}>{this.props.shortCode}</span>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="linkItem__url">
            <span style={urlStyle}>{this.props.url}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

LinkItem.propTypes = {
  shortCode: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default LinkItem;
