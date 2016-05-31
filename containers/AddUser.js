import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'

let AddUser = ({ dispatch }) => {
  let first_name_input
  let last_name_input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!first_name_input.value.trim() || !last_name_input.value.trim()) {
          return
        }
        dispatch(addUser(first_name_input.value, last_name_input.value))
        first_name_input.value = ''
        last_name_input.value = ''
      }}>
        <input ref={node => {
          first_name_input = node
        }} />
        <input ref={node => {
          last_name_input = node
        }} />
        <button type="submit">
          Add User
        </button>
      </form>
    </div>
  )
}
AddUser = connect()(AddUser)

export default AddUser
