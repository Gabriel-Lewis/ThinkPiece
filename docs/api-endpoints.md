# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users`
  - Users index/search
- `GET /api/users/:id`
- `GET /api/users/:id/stories`
  - index of all stories from a user

### Session

- `POST /api/session` 
- `DELETE /api/session`
- `GET /api/session`


### Stories

- `GET /api/stories`
  - Stories index/search
  - accepts `topic_name` query param to list stories by topic
- `POST /api/stories`
- `GET /api/stories/:id`
- `PATCH /api/stories/:id`
- `DELETE /api/stories/:id`

### Topics

- A stories's topics will be included in the story show template
- `GET /api/topics`
  - includes query param for typeahead suggestions
- `POST /api/stories/:story_id/topics`: add tag to note by name
  - if story doesn't already exist, it will be created
- `DELETE /api/stories/:story_id/topics/:topic_name`: remove topic from story by
  name
