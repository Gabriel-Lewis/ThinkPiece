 export const fetchUser = username => (
   $.ajax({
     url: `/api/users/${username}`,
   })
 );

 export const updateUser = user => (
   $.ajax({
     url: `/api/users/${user.id}`,
     method: 'PATCH',
     data: { user },
   })
 );

 export const followUser = id => (
   $.ajax({
     url: '/api/follows/',
     method: 'POST',
     data: { id },
   })
 );

 export const unfollowUser = id => (
   $.ajax({
     url: `/api/follows/${id}`,
     method: 'DELETE',
     data: { id },
   })
 );

 export const searchUsers = query => (
   $.ajax({
     url: '/api/users/search',
     data: { search: query },
   })
);
