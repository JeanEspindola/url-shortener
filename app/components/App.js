import React from 'react';
import { Grid } from 'react-bootstrap';
import LinkSubmit from './Link-Submit/LinkSubmitContainer';
import LinkList from './Link-List/LinkListContainer';
import Header from './Header/Header';

const style = {
  maxWidth: 700,
  height: '100vw',
  backgroundColor: '#EAEAEA'
};

const App = () => (
  <div
    style={style}>
    <Grid fluid>

      <Header />

      <LinkSubmit />

      <LinkList />

    </Grid>
  </div>
);

export default App;
