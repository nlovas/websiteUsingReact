import * as React from 'react';

import Header from "../header/Header"

class Layout extends React.Component {
    render() {
      return (
          <div>
          <Header></Header>
          {this.props.children}
          </div>
      );
    }
  }

  export default Layout;

  // look at this: https://stackoverflow.com/questions/36262360/react-router-global-header