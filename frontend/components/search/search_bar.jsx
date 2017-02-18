import React from 'react';
import { searchStories } from '../../util/story_api_util';
import { searchUsers } from '../../util/user_api_util';
import SearchResults from './search_results';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      searchResults: {},
      userSearchResults: [],
      hidden: 'hidden',
      show: '',
    };
    this.selectName = this.selectName.bind(this);
    this.updateResults = this.updateResults.bind(this);
    this.updateUserResults = this.updateUserResults.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.focusOnSearchInput = this.focusOnSearchInput.bind(this);
    this.hideSearchInput = this.hideSearchInput.bind(this);
  }

  selectName(event) {
    const name = event.currentTarget.value;
    this.setState({ inputVal: name });
    if (event.currentTarget.value !== '') {
      this.setState({ hidden: '' });
      searchStories(event.currentTarget.value, this.updateResults);
      searchUsers(event.currentTarget.value, this.updateUserResults);
    } else {
      this.setState({ hidden: 'hidden' });
    }
  }

  updateResults(data) {
    this.setState({
      searchResults: data,
    });
  }

  updateUserResults(data) {
    this.setState({
      userSearchResults: data,
    });
  }

  clearInput() {
    this.setState({
      inputVal: '',
      hidden: 'hidden',
    });
  }

  hideSearchInput() {
    this.setState({
      show: '',
    });
  }

  focusOnSearchInput() {
    if (this.state.show === '') {
      this.setState({ show: 'show' });
    } else {
      this.setState({ show: '' });
    }
    this.refs.search.focus();
  }

  render() {
    const stories = this.state.searchResults;
    const users = this.state.userSearchResults;
    return (
      <div className="search-bar">
        <div className="auto">
          <img
            alt="search button"
            className="search-button"
            src="http://i.imgur.com/KtfgKIg.png"
            onClick={this.focusOnSearchInput}
          />
          <input
            className={`search-input ${this.state.show}`}
            type="search"
            ref="search"
            onChange={this.selectName}
            onBlur={this.hideSearchInput}
            value={this.state.inputVal}
            placeholder="Search Thinkpiece"
          />
          <SearchResults
            show={this.state.show}
            stories={stories}
            users={users}
            clearInput={this.clearInput}
            hidden={this.state.hidden}
          />
        </div>
      </div>
    );
  }
}
