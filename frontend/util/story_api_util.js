export const createStory = story => (
  $.ajax({
    url: '/api/stories',
    method: 'POST',
    data: { story },
  })
);

export const updateStory = story => (
  $.ajax({
    url: `/api/stories/${story.id}`,
    method: 'PATCH',
    data: { story },
  })
);

export const deleteStory = id => (
  $.ajax({
    url: `/api/stories/${id}`,
    method: 'DELETE',
  })
);

export const fetchStory = id => (
  $.ajax({
    url: `/api/stories/${id}`,
  })
);

export const fetchStories = () => (
  $.ajax({
    url: '/api/stories',
  })
);

export const fetchUsersStories = username => (
  $.ajax({
    url: '/api/stories',
    data: { username },
  })
);

export const searchStories = query => (
  $.ajax({
    url: '/api/stories/search',
    data: { search: query },
  })
);
