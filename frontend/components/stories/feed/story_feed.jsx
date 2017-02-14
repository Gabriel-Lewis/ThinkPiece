import React from 'react';
import StoryFeedItem from './story_feed_item';
import {withRouter} from 'react-router'

class StoryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    return (

      <div className='background'>
        <ul className='story-feed'>
          {
            this.props.stories.map(story => (
              <StoryFeedItem
                key={story.id}
                user={story.user}
                currentUser={this.props.currentUser}
                story={story}
                currentUser={this.props.currentUser}
                createLike={this.props.createLike}
                deleteLike={this.props.deleteLike}
              />

            ))
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(StoryIndex);
