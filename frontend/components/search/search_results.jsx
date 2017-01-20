import React from 'react'
import {Link} from 'react-router'

const noPostsFound = (<li className="not-found">We couldn’t find any Stories.</li>)
const noUsersFound = (<li  className="not-found">We couldn’t find any People.</li>)
const storyLabel = (<strong>Stories</strong>)
const userLabel = (<strong>People</strong>)

const storyResultList = (stories, clearInput) => {
  if (Object.keys(stories).length > 0) {
  return (
      <ul className='search-list'>
        {Object.keys(stories).map( (id) => {
          return <li key={stories[id].title + id}>
            <Link onClick={clearInput} to={`stories/${id}`}>
              <img className='search-story-image' src={stories[id].main_image_url} alt/>
              {stories[id].title}</Link>
          </li>
        })
      }
      </ul>)
    } else {
      return (
      <ul>
        {noPostsFound}
      </ul>
    )
  }
}

const usersResultList = (users, clearInput) => {
  if (users.length > 0) {
  return (
      <ul className='search-list'>
        {users.map( (user) => {
          return <li key={user.name + user.id}>
            <Link onClick={clearInput} to={`users/${user.id}`}>
              <img className='search-profile-image' src={user.profile_image_url} />
              {user.name}
            </Link>
            </li>
        })
      }
      </ul>)
    } else {
      return (
      <ul >
        {noUsersFound}
      </ul>
    )
  }
}

const searchResultContainer = (stories, users, hidden, clearInput) => {
  return (
    <div className={`search-results ${hidden}`}>
      {storyLabel}
      <div className='line'></div>
      {storyResultList(stories, clearInput)}
      {userLabel}
      <div className='line'></div>
      {usersResultList(users, clearInput)}
    </div>
  );
}





const SearchResults = ({stories, users, hidden, clearInput}) => {
    return searchResultContainer(stories, users, hidden, clearInput)
}

export default SearchResults;
