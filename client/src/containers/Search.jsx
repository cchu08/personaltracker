import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSearchTerm } from '../actions/SearchActions';

const propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearchTermChange: PropTypes.func.isRequired
};

const Search = props =>
  <div>
    <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search" />
  </div>;

Search.propTypes = propTypes;

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
