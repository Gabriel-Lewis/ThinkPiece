import React from 'react';

import StoryFeedItem from './story_feed_item';

const ProfileStoryFeed = ({ user, stories, currentUser, deleteLike, createLike }) => (
  <div className="profile-background">
    <ul className="story-feed">
      {
        stories.map(story => (
          <StoryFeedItem
            key={story.id}
            user={user}
            story={story}
            currentUser={currentUser}
            createLike={createLike}
            deleteLike={deleteLike}
          />
        ))
          }
    </ul>
  </div>
);


export default ProfileStoryFeed;
