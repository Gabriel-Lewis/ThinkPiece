export const createLike = storyId => (
  $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { storyId },
  })
);

export const deleteLike = storyId => (
  $.ajax({
    url: '/api/likes/remove',
    method: 'DELETE',
    data: { storyId },
  })
);
