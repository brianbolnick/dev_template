import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconBread extends Component {
  render() {
    const { color } = this.props;
    return (
      <Icon viewBoxWidth="76.7" viewBoxHeight="81.7" {...this.props}>
        <path
          fill={color}
          d="M45.4,91.5h-14a40.5,40.5,0,0,1-7-.6c-5.5-1.2-8.1-3.9-8.9-9.4a39.7,39.7,0,0,1-.2-6V56.5c0-4.7,0-9.2-1.8-13.8s-.6-10.5,4.4-14a26.5,26.5,0,0,0,7.7-7.6c2.8-4.4,7.5-6.6,12.3-8.2,12.7-4.1,25.5-4.3,38.2.4a29.2,29.2,0,0,1,5.4,2.5c7.5,4.6,9,9,6.7,17.6a40.6,40.6,0,0,0-1.3,9.8c-.2,8-.2,16-.1,24,.1,6-2,10.4-7.8,12.5a5.6,5.6,0,0,0-4,4c-1.8,5.6-6.4,7.4-11.7,7.6s-12,.1-17.9.1Zm.5-5.4h0c6.4,0,12.7.2,19,0,3.8-.1,5.4-1.9,5.8-5.5a54.6,54.6,0,0,0,.2-7c0-7.3-.1-14.6.1-22a31.8,31.8,0,0,1,1.6-8.6c1.9-5.7,1.6-7.8-3-11a27.9,27.9,0,0,0-7.1-3.6,54.4,54.4,0,0,0-34.3.2,28.4,28.4,0,0,0-8.5,5c-2.4,2-3.6,5.1-1.6,8s2.5,8.8,2.5,13.5c0,8.3-.1,16.6.2,24.9.1,4.4,1.8,6,6.2,6.1C33.3,86.2,39.6,86.1,45.9,86.1ZM34.2,21.3a18.5,18.5,0,0,0,3.9.3c5.9-1.2,11.9-.4,17.8.4s13.6,3,18.8,8.1,5.6,8.3,2.7,13.5c-1.9,3.3-2.2,6.8-2.1,10.5v13a29.5,29.5,0,0,0,.6,5.9c.1.6,1.4,1.2,2.2,1.4s1.5-.4,1.7-.8c.7-2.2,1.6-4.4,1.6-6.6.2-8.3.1-16.6.1-24.8a20.8,20.8,0,0,1,2.1-10.6c2.3-4.6,1.4-7.4-2.5-10.3a22,22,0,0,0-5.1-3c-13.6-5.2-27.2-5.4-40.5.9C35,19.5,34.8,20.3,34.2,21.3Z"
          transform="translate(-12.5 -9.8)"
        />
        <path
          fill={color}
          d="M58.2,51.3c1.5,1.7,2.9,2.6,3.4,3.8s-1.3,4-3.1,4.1-3.8-1.9-3.3-3.8S56.9,53.1,58.2,51.3Z"
          transform="translate(-12.5 -9.8)"
        />
        <path
          fill={color}
          d="M36.3,44.4c-.3,1.9-2.8,3.7-4.3,2.7a5.1,5.1,0,0,1-2.3-3.6c-.2-1.7,1.3-2.9,3.1-2.9A3.5,3.5,0,0,1,36.3,44.4Z"
          transform="translate(-12.5 -9.8)"
        />
        <path
          fill={color}
          d="M38.8,68.8c1.5,1.5,3,2.3,3.5,3.6s-.7,3-2.4,3.4-4.4-1.3-4.1-3S37.5,70.5,38.8,68.8Z"
          transform="translate(-12.5 -9.8)"
        />
      </Icon>
    );
  }
}

IconBread.propTypes = {
  color: PropTypes.string
};

IconBread.defaultProps = {
  color: "#333333"
};
