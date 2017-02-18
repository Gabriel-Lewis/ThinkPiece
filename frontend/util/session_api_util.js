export const signup = (user, success, error) => {
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: user,
    success,
    error,
  });
};

export const login = (user, success, error) => {
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: user,
    success,
    error,
  });
};

export const logout = (success) => {
  $.ajax({
    url: '/api/session',
    method: 'DELETE',
    success,
  });
};
