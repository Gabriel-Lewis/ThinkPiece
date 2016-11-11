export const CREATE_LIKE = 'CREATE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

export const createLike = (id) => ({
  type: CREATE_LIKE,
  id
})

export const deleteLike = (id) => ({
  type: DELETE_LIKE,
  id
})
