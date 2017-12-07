import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createShortenUrl from '../../actions/linkActions';

class LinkInput extends Component {
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
    const { url } = this.state;
    const buttonClass = url ? '' : 'disable';
    return (
      <div>
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onCreateShortenUrl: url => dispatch(createShortenUrl(url)),
});

LinkInput.propTypes = {
  onCreateShortenUrl: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LinkInput);