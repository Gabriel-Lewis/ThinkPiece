## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**StoriesContainer**
  * StoryIndex

**SearchResultsContainer**
 - Search
 - StoryIndex
 - UserIndex

**UserIndex**
  - UserIndexItem
    + UserDetails

**StoryIndex**
 - StoryFeedItem

**NewStoryContainer**
 - NewStory
  - NewStoryButton

**NewCommentContainer**
 - NewComment
 - NewCommentButton


**Search**

**UserContainer**
  - UserFullDetails
  - FollowButton
  * StoryIndex



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "App" |
| "/stories/:storyId" | "StoryContainer" |
| "/new-story" | "NewStoryContainer" |
| "/new-comment" | "NewCommentContainer" |
| "stories/:story_id/new-topic" | "NewTopic" |
