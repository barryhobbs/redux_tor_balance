import { connect } from 'react-redux'
import UserList from '../components/UserList'

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const AUserList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)

export default AUserList
