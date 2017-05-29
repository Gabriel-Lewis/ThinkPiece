import React from 'react';

const likeButton = like => (
  <button onClick={like}>
    <img alt="like-button" className="heart" src="http://i.imgur.com/6XPFTeT.png" />
  </button>
);

const unlikeButton = unlike => (
  <button onClick={unlike}>
    <img alt="like-button" className="heart" src="http://imgur.com/CKSBKf5.png" />
  </button>
);

export default ({ liked, likeCount, unlike, like, user, viewCount }) => (
  <div className="story-like-details">
    {liked ? unlikeButton(unlike) : likeButton(like)}
    <p>{likeCount} • {viewCount} views</p>
  </div>
  );
