import React, { Component } from 'react';
import { Link } from '@reach/router'

class Welcome extends Component {
  render() {
    const { user } = this.props
    return (
      <div className="text-center mt-4">
        <span className="text-secondary font-weight-bold pl-1">{user}</span>
        <Link to="/login" className="font-weight-bold text-primary pl-1">(Log Out)</Link>
      </div>
    )
  }
}

export default Welcome;
