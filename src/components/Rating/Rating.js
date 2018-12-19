import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Star from "./Star";
import Popover from "../Popover/Popover";

const StyledSpan = styled.span``;
const RatingContainer = styled.div`
  max-width: 125px;
`;

class Rating extends Component {
  renderStars = () => {
    const { value } = this.props;

    //round value to nearest .5
    const rounded = Math.round(value * 2) / 2;

    let stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rounded) {
        stars.push(<Star type="filled" key={i} />);
      } else if (
        i > Math.floor(rounded) &&
        i <= Math.ceil(rounded) &&
        rounded % 1 !== 0
      ) {
        stars.push(<Star type="half" key={i} />);
      } else {
        stars.push(<Star type="blank" key={i} />);
      }
    }

    return <RatingContainer>{stars}</RatingContainer>;
  };
  render() {
    return (
      <Popover target={this.renderStars()}>
        <StyledSpan>
          Rating: {this.props.value && this.props.value.toFixed(1)}
          /5
        </StyledSpan>
      </Popover>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number.isRequired
};

export default Rating;