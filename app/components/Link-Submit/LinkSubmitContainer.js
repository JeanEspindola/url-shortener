import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createShortenUrl } from '../../actions/linkSubmitActions';
import LinkSubmit from './LinkSubmit';

const mapStateToProps = state => ({
  isLoading: state.submitIsLoading,
});

const mapDispatchToProps = dispatch => ({
  onCreateShortenUrl: url => dispatch(createShortenUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkSubmit);
