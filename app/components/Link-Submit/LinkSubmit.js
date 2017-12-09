import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
      <Row>
        <Col md={12}>
          <form className="form" onSubmit={this.onSearch}>
            <input
              type="text"
              className="form__input"
              style={{ width: 400 }}
              placeholder="Paste the url here."
              value={url}
              onChange={this.onChangeUrl}
              name="url"
              />
            <button
              className={`button button--primary form__button ${buttonClass}`}
              type="submit"
              disabled={!url}
              >
              Shorten this link
            </button>
          </form>
        </Col>
      </Row>
    );
  }
}

LinkSubmit.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onCreateShortenUrl: PropTypes.func.isRequired,
};

export default LinkSubmit;