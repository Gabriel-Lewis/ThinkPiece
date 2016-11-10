import React from 'react'
import {Link} from 'react-router'

const noPostsFound = (<li>We couldn’t find any posts.</li>)
const noUsersFound = (<li>We couldn’t find any Users.</li>)
const storyLabel = (<strong>Stories</strong>)
const userLabel = (<strong>Users</strong>)

const storyResultList = (stories, clearInput) => {
  if (Object.keys(stories).length > 0) {
  return (
      <ul className='search-list'>
        {Object.keys(stories).map( (id) => {
          return <li key={stories[id].title + id}>
            <Link onClick={clearInput} to={`stories/${id}`}>{stories[id].title}</Link>
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
            <Link onClick={clearInput} to={`users/${user.id}`}>{user.name}</Link>
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
      {storyResultList(stories, clearInput)}
      {userLabel}
      {usersResultList(users, clearInput)}
    </div>
  );
}





const SearchResults = ({stories, users, hidden, clearInput}) => {
    return searchResultContainer(stories, users, hidden, clearInput)
}

export default SearchResults;
