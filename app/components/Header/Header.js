import React from 'react';
import { Row, Col } from 'react-bootstrap';

const logoStyle = {
  fontSize: 47,
  color: '#EB4A42',
};

const textStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  lineHeight: 'normal',
  color: '#AAAAAA',
};

const colRight = {
  textAlign: 'right',
};

const headerStyle = {
  height: 100,
  lineHeight: '100px',
};

const Header = () => (
  <header className="header" style={headerStyle}>
    <Row>
      <Col xs={7}>
        <h1 className="header__logo" style={logoStyle}>Shooooort</h1>
      </Col>
      <Col xs={5} style={colRight}>
        <p className="header__text" style={textStyle}>The link shortener with a long name</p>
      </Col>
    </Row>
  </header>
);

export default Header;
