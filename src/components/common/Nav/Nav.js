import React from "react";
import {
  Navbar,
  Brand,
  BrandImage,
  NavLinks,
  NavLink
  //NavAnchor
} from "./NavStyles";
import { Link } from "react-router-dom";
import { Logo } from "styles/css-variables.js";
//import Button from "components/common/Button/Button";

const Nav = props => {
  return (
    <Navbar recipe={props.recipe} auth={props.auth}>
      <Brand recipe={props.recipe}>
        <Link to="/">
          <BrandImage src={Logo} alt="" />
        </Link>
      </Brand>
      <NavLinks>
        <NavLink auth={props.auth} to="/about">
          About
        </NavLink>

        <NavLink auth={props.auth} to="/sign_in">
          Sign In
        </NavLink>
        {/* token && (
          <Button asLink onClick={signOut} transparentBackground>
            Sign Out
          </Button>
				)*/}
      </NavLinks>
    </Navbar>
  );
};

export default Nav;
