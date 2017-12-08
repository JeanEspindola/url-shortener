import React from 'react';
import {Grid} from 'react-bootstrap';
import LinkInput from './Link-Input/LinkInput';
import LinkList from './Link-List/LinkList';
import Header from './Header/Header';

const App = () => (
  <Grid fluid={true}>

    <Header />

    <LinkInput />

    <LinkList />

  </Grid>
);

export default App;
