import React from 'react';
import { Grid } from 'react-bootstrap';
import LinkSubmit from './Link-Submit/LinkSubmitContainer';
import LinkList from './Link-List/LinkListContainer';
import Header from './Header/Header';

const App = () => (
  <Grid fluid>

    <Header />

    <LinkSubmit />

    <LinkList />

  </Grid>
);

export default App;
