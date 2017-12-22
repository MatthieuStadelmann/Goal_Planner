import React from 'react';
import Logo from './logo'
import { Link } from 'react-router'

export class Welcome extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="welcomecontainer">
        <div className='login'>
              <Logo />
          {this.props.children}
      </div>
      </div>);
  }
}
