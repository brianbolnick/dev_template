import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconCog extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon
        size={size}
        viewBoxWidth="81.7"
        viewBoxHeight="80.8"
        {...this.props}
      >
          <path
            fill={color}
            d="M84.1,29c-1,2.1-2.2,4.1-3,6.2s.2,3.2,1.7,4.2a1.9,1.9,0,0,0,.9.4c3.1.4,6,1.2,6.9,4.7s1.6,9.3-1,13.5c-.9,1.4-3.3,2-5,2.8-3.8,1.7-4.5,2.9-2.3,6.7S84,74.4,81,77.4s-3.3,3.2-5.1,4.7-5.3,2.6-8.2.6-5.6-1.6-6.5,2-4.4,6.2-8.9,6h-6c-3.4-.1-5.6-1.6-6.4-5.1a7.3,7.3,0,0,0-1-2.8c-1-1.4-2.5-2.2-4.3-1.2s-2.2,1.4-3.4,2a5.2,5.2,0,0,1-5.6-.7l-5.8-5.5c-3.1-2.8-3.9-5.7-1.7-9.7s2.1-5-3.1-6.9-5.2-3.8-5.2-7.5v-5c-.2-4.6,1.6-7.3,6.5-8.4s4.3-2.4,2.3-5.8S16.8,26.5,20,23.3l3.5-3.5c2.9-3,6-4.3,9.7-1.3a9.5,9.5,0,0,0,1.7,1c1.8.8,3.9.3,4.1-1.4,1.1-8.5,7.1-8.3,13.3-8h1c3.8-.1,6.1,1.3,7.6,5.1s2.5,5.4,6.8,3,6.3-1.4,8.9,1.4,3.8,3.7,5.5,5.7A16.1,16.1,0,0,1,84.1,29ZM86,50.3c-.1-2.7-.5-4.6-3.2-5.8-7.2-3.3-8.2-5.9-5.1-13,1-2.3.7-3.7-.9-5.2s-3.5-4.6-7.5-3C62,26.2,59.4,25,56.1,17.9c-1.2-2.6-2.7-3.4-5.2-3.4s-5.6,0-6.4,3.4-1.9,4.9-4.6,6a9.6,9.6,0,0,1-7.8-.2c-1.1-.5-2.9-1.2-3.6-.7a18,18,0,0,0-5.6,5.4c-.6.8.4,3,1.2,4.4s.8,5.1-.4,7.6a6.7,6.7,0,0,1-5.3,4c-3.5.4-4.2,2.6-4.2,5.6s.6,5.3,4.4,6.6c6.2,2.1,7.6,6.2,4.7,12.4-1.5,3.3-.4,5,1.6,6.9s3.4,3.5,6.8,1.8c6.4-3,9.6-1.7,12.4,4.8,1.3,3.2,3.3,3.8,6.1,3.8s4.7-.7,6-3.8c2.7-6.1,6-7.8,11.8-5.5,4.1,1.7,6.2.2,8.6-2.2s1.9-3.6.7-6.1c-2.7-5.7-1.5-9.6,4.4-12C85.4,55.2,86,53.2,86,50.3Z"
            transform="translate(-9.8 -10)"
          />
          <path
            fill={color}
            d="M65.8,50.9A15.5,15.5,0,0,1,50.5,66.1c-8.6,0-16.1-7.7-15.8-16.1s7.7-15.4,15.6-15.3A15.6,15.6,0,0,1,65.8,50.9Zm-26.1-.4c0,6,5,11,10.7,10.9a11.6,11.6,0,0,0,11-10.8C61.5,45,56.3,40,50.4,40S39.7,44.1,39.7,50.5Z"
            transform="translate(-9.8 -10)"
          />
      </Icon>
    );
  }
}

IconCog.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

IconCog.defaultProps = {
  size: 35,
  color: "#333333"
};