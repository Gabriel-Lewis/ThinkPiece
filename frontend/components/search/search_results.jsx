import React from 'react';
import { Link } from 'react-router';

const noPostsFound = (<li className="not-found">We couldn’t find any Stories.</li>);
const noUsersFound = (<li className="not-found">We couldn’t find any People.</li>);
const storyLabel = (<strong>Stories</strong>);
const userLabel = (<strong>People</strong>);

const storyResultList = (stories, clearInput) => {
  if (Object.keys(stories).length > 0) {
    return (
      <ul className="search-list">
        {Object.keys(stories).map(id => <li key={stories[id].title + id}>
          <Link onClick={clearInput} to={`/stories/${id}`}>
            <img
              className="search-story-image"
              src={stories[id].main_image_url}
              alt={stories[id].title}
            />
            {stories[id].title}</Link>
        </li>)
      }
      </ul>);
  }
  return (
    <ul>
      {noPostsFound}
    </ul>
  );
};

const usersResultList = (users, clearInput) => {
  if (users.length > 0) {
    return (
      <ul className="search-list">
        {users.map(user => <li key={user.name + user.id}>
          <Link onClick={clearInput} to={`/users/${user.username}`}>
            <img
              alt={user.username}
              className="search-profile-image"
              src={user.profile_image_url}
            />
            {user.name}
          </Link>
        </li>)
      }
      </ul>);
  }
  return (
    <ul >
      {noUsersFound}
    </ul>
  );
};

const searchResultContainer = (stories, users, hidden, clearInput, show) => (
  <div className={`search-results ${hidden} ${show}`}>
    {storyLabel}
    <div className="line" />
    {storyResultList(stories, clearInput)}
    {userLabel}
    <div className="line" />
    {usersResultList(users, clearInput)}
  </div>
  );


const SearchResults = ({ stories, users, hidden, clearInput, show }) =>
searchResultContainer(stories, users, hidden, clearInput, show);

export default SearchResults;
