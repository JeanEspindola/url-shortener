import React from 'react';
import {Grid} from 'react-bootstrap';
import LinkInput from './Link-Input/LinkInput';
import Header from './Header/Header';

const App = () => (
  <Grid fluid={true}>

    <Header />

    <LinkInput />
  </Grid>
);

export default App;
