```js
{
  currentUser: {
    id: 1,
    username: "@johndoe"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  Stories: {
    1: {
      title: "Sample State",
      body: "is useful to plan",
      author_id: 1,
      topics: {
        1: {
          id: 1
          name: "Thinking"
        }
      }
    }
  },
  topicFilters: [1, 7, 14] // Used to track selected Topics for filtering of stories
}
```
