export const signup = () => {
  $.ajax({
    url: 'api/users',
    method: 'POST',
    data: data,
    success: success
  })
}

export const lgoinup = () => {
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data: data,
    success: success
  })
}

export const logout = () => {
  $.ajax({
    url: 'api/session',
    method: 'DELETE',
    data: data,
    success: success
  })
}
