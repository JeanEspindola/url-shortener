import React from 'react';
import { Row, Col } from 'react-bootstrap';

const logoStyle = {
  fontSize: 47,
  color: '#EB4A42'
};

const textStyle = {
  color: '#AAAAAA'
};

const Header = () => (
  <header className="header">
    <Row>
      <Col md={8}>
        <h1 className="header__logo" style={logoStyle}>Shooooort</h1>
      </Col>
      <Col md={4}>
        <h6 className="header__text" style={textStyle}>The link shortener with a long name</h6>
      </Col>
    </Row>
  </header>
);

export default Header;
