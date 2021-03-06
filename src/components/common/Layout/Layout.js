import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { tabletMediaQuery, media } from "styles/css-variables";
import Nav from "components/common/Nav/Nav";
import MobileNav from "components/common/Nav/MobileNav";
import MediaQuery from "components/common/MediaQuery/MediaQuery";

const Content = styled.div`
  width: ${({ recipe }) => (recipe ? "100%" : "90%")};
  margin: 0 auto;
  margin-top: ${({ recipe }) => (recipe ? "0" : "10px")};
  height: calc(100% - 111px);

  ${({ recipe }) =>
    recipe &&
    `
			overflow: hidden;
	    height: 100%;
	    position: relative;
	`};

  ${media.phone`
	margin-top: 72px;
    overflow: auto;
	`};
`;

class Layout extends React.Component {
  state = {
    showMobile: window.matchMedia("(" + tabletMediaQuery + ")").matches
  };

  handleMediaQueryChange = ({ matches }) => {
    this.setState({ showMobile: matches });
  };

  render() {
    const { showMobile } = this.state;
    const { recipe } = this.props;
    return (
      <>
        <MediaQuery
          query={tabletMediaQuery}
          onChange={this.handleMediaQueryChange}
        />
        {showMobile ? <MobileNav /> : <Nav recipe={recipe} />}
        <Content recipe={recipe}>{this.props.children}</Content>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any,
  recipe: PropTypes.bool
};

export default Layout;
