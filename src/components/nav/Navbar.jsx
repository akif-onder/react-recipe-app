import {Link} from 'react-router-dom';
import Nav, {Logo, Menu, MenuLink} from './Navbar.style';

const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
      <i>{"<Clarusway/>"}</i>
      <span>Recipe</span>
      </Logo>

      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="login">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;