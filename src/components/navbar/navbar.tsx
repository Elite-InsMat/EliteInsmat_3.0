import React, { useState, AriaAttributes, DOMAttributes } from 'react';

import { GiHamburgerMenu, MdClose } from 'react-icons/all';
import { Link } from 'gatsby';

import './navbar.css';

//custom attribute selector for navbar
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    growDown?: number;
  }
}

const Navbar = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const [growDown, setGrowDown] = useState(1);

  const showMenu = () => {
    setShow(!show);
    setGrowDown(growDown === 0 ? 1 : 0);
  };

  return (
    <nav className="Navbar" growDown={growDown}>
      <ul className="List">
        <li onClick={showMenu}>
          <Link to="/">Etusivu</Link>
        </li>
        <li onClick={showMenu}>
          <Link to="/info">About Elite InsMat</Link>
        </li>
        <li onClick={showMenu}>
          <Link to="/galleria">Galleria</Link>
        </li>
        <li onClick={showMenu}>
          <Link to="/eventscalendar">Tapahtumakalenteri</Link>
        </li>
        <li onClick={showMenu}>
          <Link to="/kanavat">Kanavat</Link>
        </li>
        <li onClick={showMenu}>
          <Link to="/ruokalista">Ruokalista</Link>
        </li>
        <li>
          <button onClick={showMenu} className="dropdown">
            {show ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
