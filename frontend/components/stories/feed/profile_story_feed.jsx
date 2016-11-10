import React from 'react';
import StoryFeedItem from './story_feed_item';
import {withRouter} from 'react-router'
import HeaderContainer from '../../header/header_container'

class ProfileStoryFeed extends React.Component {
  componentDidMount() {
  }

  render() {
    return (

      <div className='profile-background'>
        <ul className='story-feed'>
          {
            this.props.stories.map(story => (
              <StoryFeedItem
                key={story.id}
                user={this.props.user}
                story={story}
                />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(ProfileStoryFeed);
