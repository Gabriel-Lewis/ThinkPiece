# Thinkpiece

[Thinkpiece Live Demo](http://thinkpiece.space)

Thinkpiece is a single page web app inspired by Medium.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the front-end.  

## Features

### User Account Creation and Login

<img alt="Thinkpiece" width='700px' src="http://i.imgur.com/6RAzbEk.png">

**Users can Sign up with Thinkpiece knowing their information is secure**

When users sign up their data is encrypted using the ruby gem [BCrypt](https://github.com/codahale/bcrypt-ruby). Once a user logs in they're browser stores a session token to keep them logged when they come to Thinkpiece again.

### Stories

<img alt="Gabriel Lewis" width='700px' src="http://i.imgur.com/y1zSeQm.png">

**Stories are the main feature of Thinkpiece.**

Users can create, edit, and share their own stories, or read the stories of others and like them.

### Feed

<img alt="Think piece feed" width='700px' src="http://i.imgur.com/ihxBGdz.gif">

**The main feed is where users can view stories of all of the users the follow.**

### Rich Text Editing

<img alt="rich text editing" width='700px' src="http://i.imgur.com/Qmdzjam.gif">

**With Rich Text Editing users can style their stories to their liking.**

One of Medium's best features is it's easy to use text editor. Using the [Medium Drafts](https://github.com/brijeshb42/medium-draft) node package, Thinkpiece recreates this experience. Users can embolden, italize, highlight, add links, and more. Users can also use the keybindings they are familiar with to style their story. For example a user can highlight text and embolden it by pressing CMD-B.

### Image Upload

<img alt="image upload" width='700px' src="http://i.imgur.com/K1WCa49.gif">

**A Picture is worth a thousand words**

Users can easily upload images in their story. The file input's success calls an ajax request to store the image on imgur.

## Technical Details

Thinkpiece's visual component's are built with React, and redux. Each of the major elements are react components. For example below is the StoryFeed Render method below:

```javascript
render() {
  return (
    <div className='background'>
      <ul className='story-feed'>
        {
          this.props.stories.map(story => (
            <StoryFeedItem
              key={story.id}
              user={story.user}
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
```

The StoryFeed Component creates StoryFeedItem's using the data it receives from the router onEnter. The React Routes is used in this project to keep the React components in sync with the URL. The [React Router](https://github.com/ReactTraining/react-router) structure for this project can be seen below.

```javascript
<Provider store={store}>
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={StoryIndexContainer} />
      <Route path="/stories" component={StoryIndexContainer} />
      <Route path="/stories/:storyId" component={StoryContainer} onEnter={onEnterFetchStory}/>
      <Route path="/users/:username" component={UserProfileContainer} onEnter={onEnterFetchUser}/>
    </Route>
    <Route path='/new-story' component={NewStoryContainer} />
    <Route path="/stories/:storyId/edit" component={StoryFormContainer} onEnter={onEnterFetchStory} />
    <Route path='*' component={NotFoundComponent} />
  </Router>
</Provider>
```

[React Modal](https://github.com/reactjs/react-modal) was used to display modals throughout this project. It was used on the login page to recreate a similar login experience to Medium's.

Thinkpiece's backend is supported with PostgreSQL.
 
### Contact
You can reach me on

[Twitter](https://www.twitter.com/gabriel__lewis)

[Github](https://www.github.com/gabriel-lewis)

[LinkedIn](http://www.linkin.com/in/gabriellewis0)
