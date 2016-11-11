export const createLike = (story_id, success) => {
  $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { story_id },
    success: success
  })
}

export const deleteLike = (story_id, success) => {
  $.ajax({
    url: '/api/likes/remove',
    method: 'DELETE',
    data: { story_id },
    success
    })
}
