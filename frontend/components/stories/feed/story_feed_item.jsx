import React from 'react';
import { Link, withRouter } from 'react-router';


class StoryFeedItem extends React.Component {
  constructor(props) {
    super(props)
    this.story = props.story;
    this.mainImgBlock = this.mainImgBlock.bind(this)
  }

  mainImgBlock() {
    if (this.story.main_image_url) {
        return (<img src={this.story.main_image_url} />)
    } else {
      return <div></div>
    }

  }

  render() {
    return (
    <li className='story-index-item'>
      <div className='story-author-link'>
        <Link className to={`users/${this.story.user.id}`} >
          <img className='feed-profile-image user-image' src={this.story.user.profile_image_url} />
          {this.story.user.name}
        </Link>
      </div>
      <Link to={`/stories/${this.story.id}`}>
        {this.mainImgBlock()}
        <h3 className='story-index-item-title'>{this.story.title}</h3>
       </Link>

        <Link className='read-more-button' to={`/stories/${this.story.id}`}>
          Read more...
        </Link>
    </li>
  );
  }
}


export default withRouter(StoryFeedItem);
