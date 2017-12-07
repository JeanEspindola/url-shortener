import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Header = () => (
  <header className="header">
    <Row>
      <Col md={8}>
        <h1 className="header__logo">Shooooort</h1>
      </Col>
      <Col md={4}>
        <h6 className="header__text">The link shortener with a long name</h6>
      </Col>
    </Row>
  </header>
);

export default Header;
