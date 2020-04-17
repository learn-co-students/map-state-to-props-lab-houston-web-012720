import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li key={user.username}>{user.username}- {user.hometown}</li>)}
          <h3>{this.props.userCount}</h3>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
