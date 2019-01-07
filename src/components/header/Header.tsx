import * as React from 'react';
import { BrowserRouter as BrowserRouter, Router, Route, Link } from "react-router-dom";

import './header.scss';


/*
Header to each page
*/

//dont think im going to need this
/*export interface Props {
}
*/

const Header = () => (

    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/art/">Art</Link>
          </li>
          <li>
            <Link to="/code/">Code</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
    </div>
);

export default Header;
