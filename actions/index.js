let nextUserId = 0
export const addUser = (first_name, last_name) => {
  return {
    type: 'ADD_USER',
    id: nextUserId++,
    first_name,
    last_name
  }
}
