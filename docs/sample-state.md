```js
{
  currentUser: {
    id: 1,
    username: "@johndoe"
    image_url: "http://www.imgur.com/my_profile_img"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createStory: {errors: ["body can't be blank"]}
  },
  stories: {
    1: {
      title: "Sample State",
      body: "is useful to plan",
      author_id: 1,
      topics: {
        1: {
          id: 1
          name: "Thinking"
        }
      },
    comments: {
      1: {
        title: "This story is great!",
        body: 'I love this story',
        author_id: 1,
        story_id: 1
      }
    }  
    }
  },
  followers: {
    1: {
      follower_id: 1,
      following_id: 4
    }
  },
  likes: {
    1: {
      user_id: 1,
      story_id: 1
    }
  },
  topicFilters: [1, 7, 14] // Used to track selected Topics for filtering of stories
}
```
