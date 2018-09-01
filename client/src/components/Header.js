import React, {Component} from 'react';
import { connect } from 'react-redux';
class Header extends Component {


  render() {
    console.log(this.props)
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul className="right">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

//We make the Header a class based component beause we'll want to write helper functions inside which will
//decide what to show inside of the Header component whether a user is logged in or not
function mapStateToProps(state) {
  return {auth: state.auth}
}


export default connect(mapStateToProps)(Header);