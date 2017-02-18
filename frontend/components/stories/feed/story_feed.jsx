import React from 'react';
import { withRouter } from 'react-router';

import StoryFeedItem from './story_feed_item';

class StoryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    return (

      <div className="background">
        <ul className="story-feed">
          {
            this.props.stories.map(story => (
              <StoryFeedItem
                key={story.id}
                user={story.user}
                currentUser={this.props.currentUser}
                story={story}
                open={this.context.open}
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

StoryIndex.contextTypes = {
  open: React.PropTypes.func,
};


export default withRouter(StoryIndex);
