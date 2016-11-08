import React from 'react';
import StoryFeedItem from './story_feed_item';
import {withRouter} from 'react-router'
import HeaderContainer from '../../header/header_container'

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
                story={story} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(StoryIndex);
