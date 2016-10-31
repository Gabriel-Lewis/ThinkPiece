# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_image_url | string  | not null

- has_many
  - comments
  - stories
  - likes

## stories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
image_url   | string    | not null

- has_many
  - comments
  - topics
  - likes

- belongs_to
  - user

## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

- belongs_to
  - story

## storytopics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
story_id    | integer   | not null, foreign key (references stories), indexed, unique [topic_id]
topic_id    | integer   | not null, foreign key (references topics), indexed

- belongs_to
  - story

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed, unique [following_id]
following_id| integer   | not null, foreign key (references users), indexed


## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
body        | text      | not null

- belongs_to
  - story
  - user


## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique [story_id]
story_id    | integer   | not null, foreign key (references users), indexed

- belongs_to
  - story
  - user
