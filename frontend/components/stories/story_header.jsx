import React from 'react';
import { Link } from 'react-router';

import PublishStoryModal from '../modals/publish_story_modal';
import SettingsModal from '../modals/settings_modal';

class storyHeader extends React.Component {

  handleLogout() {
    this.props.logout();
  }

  deleteButton() {
    if (this.props.deleteStory) {
      return (<button onClick={this.props.deleteStory}>Delete</button>);
    }
    return (<div />);
  }

  newStoryHeader() {
    return (
      <div className="header">
        <nav>
          <Link to="/"><h3 className="logo">Thinkpiece</h3></Link>
          <div className="header-settings">
            <PublishStoryModal
              submitStory={this.props.submitStory}
              setMainImg={this.props.setMainImg}
            />
            <div>{this.deleteButton()}</div>
            <SettingsModal
              currentUser={this.props.currentUser}
              handleLogout={this.handleLogout}
            />
          </div>
        </nav>
      </div>
    );
  }

  render() {
    return this.newStoryHeader();
  }
}

storyHeader.propTypes = {
  currentUser: React.PropTypes.object,
  logout: React.PropTypes.func,
  submitStory: React.PropTypes.func,
  deleteStory: React.PropTypes.func,
  setMainImg: React.PropTypes.func,
};

export default storyHeader;
