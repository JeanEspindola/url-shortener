import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Header = () => (
  <header className="header">
    <Grid fluid={true}>
      <Row>
        <Col md={8}>
          <h1 className="header__logo">Shooooort</h1>
        </Col>
        <Col md={4}>
          <span className="header__text">The link shortener with a long name</span>
        </Col>
      </Row>
    </Grid>
  </header>
);

export default Header;
