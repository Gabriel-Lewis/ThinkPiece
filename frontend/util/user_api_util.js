 export const fetchUser = (id, success) => {
  $.ajax({
    url: `/api/users/${id}`,
    success: success,
    error: () => {console.log("Error in UserApiUtil#fetchUser")}
  })
}

export const updateUser = (user, success) => {
  $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user },
    success: success,
    error: () => {console.log("Error in UserApiUtil#update")}
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
