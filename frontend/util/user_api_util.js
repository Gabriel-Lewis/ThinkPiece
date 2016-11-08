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

export const followUser = (followed_id, success) => {
  $.ajax({
    url: '/api/follows',
    method: 'POST',
    data: { followed_id },
    success: success,
    error: () => {console.log("Error in UserApiUtil#followUser")}
  })
}
