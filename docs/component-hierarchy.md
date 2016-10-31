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
 - StoryIndexItem
  + StoryDetails

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
| "/home" | "HomeContainer" |
| "/home/stories/:storyId" | "StoryContainer" |
| "/home/topic/:topicId/story/:storyId" | "StoryContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-story" | "NewStoryContainer" |
| "/new-comment" | "NewCommentContainer" |
| "/search" | "Search" |
| "/new-topic" | "NewTopic" |
| "/topic-search" | "TopicSearch" |
| "/user-search" | "UserSearch" |
