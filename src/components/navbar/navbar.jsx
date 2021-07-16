import React from "react";
import { Link } from "gatsby";
import { Wrapper, ListWrapper, LinkWrapper } from "./navbarStyles";

export const NavBar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h1>shep.</h1>
      </Link>

      <ListWrapper>
        <Link to="/about">
          <LinkWrapper color="#6C63FF">about</LinkWrapper>
        </Link>
        <Link to="/projects">
          <LinkWrapper color="#80DEA0">projects</LinkWrapper>
        </Link>

        <a href="mailto:shepardjberry@gmail.com">
          <LinkWrapper color="#FF9DB1">contact</LinkWrapper>
        </a>
      </ListWrapper>
    </Wrapper>
  );
};
