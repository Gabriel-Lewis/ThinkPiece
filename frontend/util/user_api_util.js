 export const fetchUser = (username, success) => {
  $.ajax({
    url: `/api/users/${username}`,
    success: success
  })
}

export const updateUser = (user, success) => {
  $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user },
    success: success
  })
}

export const followUser = (id, success) => {
  $.ajax({
    url: '/api/follows/',
    method: 'POST',
    data: { id },
    success: success
  })
}

export const unfollowUser = (id, success) => {
  $.ajax({
    url: `/api/follows/${id}`,
    method: 'DELETE',
    data: { id },
    success: success
  })
}

export const searchUsers = (query, success) => {
  $.ajax({
    url: `/api/users/search`,
    data: {search: query},
    success: success
  });
};
