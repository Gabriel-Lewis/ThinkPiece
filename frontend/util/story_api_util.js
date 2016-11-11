export const createStory = (story, success) => {
  $.ajax({
    url: '/api/stories',
    method: 'POST',
    data: { story },
    success: success,
    error: () => {console.log("Error in StoryApiUtil#create")}
  });
}

export const updateStory = (story, success) => {
  $.ajax({
    url: `/api/stories/${story.id}`,
    method: 'PATCH',
    data: { story },
    success: success,
    error: () => {console.log("Error in StoryApiUtil#update")}
  });
}

export const deleteStory = (id, success) => {
  $.ajax({
    url: `api/stories/${id}`,
    method: 'DELETE',
    success: success,
    error: () => {console.log("Error in StoryApiUtil#delete")}
  });
};

export const fetchStory = (id, success) => {
  $.ajax({
    url: `/api/stories/${id}`,
    success: success
  });
};

export const fetchStories = success => {
  $.ajax({
    url: `/api/stories`,
    success: success
  });
};

export const fetchUsersStories = (user_id, success) => {
  $.ajax({
    url: `/api/stories`,
    data: { user_id },
    success: success
  });
};

export const searchStories = (query, success) => {
  $.ajax({
    url: `/api/stories/search`,
    data: {search: query},
    success: success
  });
};
