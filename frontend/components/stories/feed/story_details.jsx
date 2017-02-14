import React from 'react'

const likeButton = (like) => (
    <button onClick={like}>
      <img className='heart' src='http://i.imgur.com/6XPFTeT.png'/>
    </button>
)

const unlikeButton = (unlike) => (
  <button onClick={unlike}>
    <img className='heart' src='http://imgur.com/CKSBKf5.png'/>
  </button>
)

export default ({liked, likeCount, unlike, like, user}) => {
  if (user) {
    if (liked) {
      return (<div className='story-like-details'>
        {unlikeButton(unlike)}
        <p>{likeCount}</p>
      </div>)
    } else {
      return(
        <div className='story-like-details'>
          {likeButton(like)}
          <p>{likeCount}</p>
        </div>)
    }
  } else {
    return (
      <div className='story-like-details'>
        <button onClick={alert('Must be Signed in to like')}>
          <img className='heart' src='http://i.imgur.com/6XPFTeT.png'/>
        </button>
      </div>
    )
  }



}
