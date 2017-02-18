export const createLike = (storyId, success) => {
  $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { storyId },
    success,
  });
};

export const deleteLike = (storyId, success) => {
  $.ajax({
    url: '/api/likes/remove',
    method: 'DELETE',
    data: { storyId },
    success,
  });
};
