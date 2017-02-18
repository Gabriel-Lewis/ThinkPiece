export const createStory = (story, success) => {
  $.ajax({
    url: '/api/stories',
    method: 'POST',
    data: { story },
    success,
  });
};

export const updateStory = (story, success) => {
  $.ajax({
    url: `/api/stories/${story.id}`,
    method: 'PATCH',
    data: { story },
    success,
  });
};

export const deleteStory = (id, success) => {
  $.ajax({
    url: `/api/stories/${id}`,
    method: 'DELETE',
    success,
  });
};

export const fetchStory = (id, success) => {
  $.ajax({
    url: `/api/stories/${id}`,
    success,
  });
};

export const fetchStories = (success) => {
  $.ajax({
    url: '/api/stories',
    success,
  });
};

export const fetchUsersStories = (username, success) => {
  $.ajax({
    url: '/api/stories',
    data: { username },
    success,
  });
};

export const searchStories = (query, success) => {
  $.ajax({
    url: '/api/stories/search',
    data: { search: query },
    success,
  });
};
