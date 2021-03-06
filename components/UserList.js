import React, { PropTypes } from 'react'
import User from './User'

const UserList = ({ users }) => (
  <ul>
    {users.map(user =>
      <User
        key={user.id}
        {...user}
      />
    )}
  </ul>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default UserList
