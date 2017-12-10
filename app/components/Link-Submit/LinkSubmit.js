import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

const containerStyle = {
  marginBottom: 40
};

const inputStyle = {
  color: '#555555',
  backgroundColor: '#E0E0E0',
  width: 500
};

const buttonStyle = {
  backgroundColor: '#EB4A42'
};

class LinkSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
    };

    this.onChangeUrl = this.onChangeUrl.bind(this);
  }

  onChangeUrl(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSearch = (e) => {
    e.preventDefault();

    const { url } = this.state;

    if (url === '') {
      return;
    }

    this.props.onCreateShortenUrl(url);

    this.setState({ url: '' });
  };

  render() {
    if (this.props.isLoading) {
      return <p>Shortening URL…</p>;
    }

    const { url } = this.state;
    const buttonClass = url ? '' : 'disable';
    return (
      <div
        className="linkSubmit"
        style={containerStyle}
      >
        <Row>
          <Col md={12}>
            <Form inline className="linkSubmit__form" onSubmit={this.onSearch}>
              <FormGroup controlId="formInlineEmail">
                <FormControl
                  type="text"
                  className="linkSubmit__form__input"
                  style={inputStyle}
                  placeholder="Paste the url here."
                  value={url}
                  onChange={this.onChangeUrl}
                  name="url"
                />
              </FormGroup>
              {' '}
              <Button
                className={`linkSubmit__form__button ${buttonClass}`}
                type="submit"
                disabled={!url}
                style={buttonStyle}
              >
                Shorten this link
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

LinkSubmit.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onCreateShortenUrl: PropTypes.func.isRequired,
};

export default LinkSubmit;
