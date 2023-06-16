import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { SearchBar, SearchForm } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    queryForm: '',
  };

  handleChange = e => {
    const value = e.target.value.toLowerCase().trim();
    this.setState({ queryForm: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.queryForm.trim() === '') {
      alert('enter name images or photos');
      return;
    }
    this.props.onSubmit(this.state.queryForm);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ queryForm: '' });
  };
  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">
              <BsSearch />
            </span>
          </button>
          <input
            onChange={this.handleChange}
            className="input"
            type="text"
            value={this.state.queryForm}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
