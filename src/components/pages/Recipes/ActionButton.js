import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "components/Icon/Icon";
import { fadeInDown, colors, media } from "styles/css-variables";
import Tooltip from "components/Tooltip/Tooltip";

const StyledTooltip = styled(Tooltip)``;

const ButtonContainer = styled.button`
	border-radius: 50%;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
	background: ${colors.black};
	cursor: pointer;
  width: 48px;
  height: 48px;
	border: none;
	outline: none;
  * > &:hover {
    box-shadow: 0px 0px 6px 2px ${colors.offGray};
  }

	${media.phone`
		box-shadow: 0px 0px 10px 1px #ffffff8c;

		* > &:hover {
			box-shadow: 0px 0px 10px 4px #ffffff8c;
		}
	`}

  div {
    width: 100%;
    height: 100%;
    padding: 12px;
    margin: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

const Container = styled.div`
  animation-name: ${fadeInDown};
  animation-duration: 0.2s;
  animation-fill-mode: backwards;
  :nth-child(2) {
    animation-delay: 0.1s;
  }
  :nth-child(3) {
    animation-delay: 0.2s;
  }
`;

const ActionButton = ({ icon, color, onClick, to, tooltip, tipPosition }) => {
  return (
    <Container>
      <StyledTooltip type="arrow" tip={tooltip} position={tipPosition}>
        {to ? (
          <Link to={to}>
            <ButtonContainer>
              <Icon name={icon} color={color} />
            </ButtonContainer>
          </Link>
        ) : (
          <ButtonContainer onClick={onClick}>
            <Icon name={icon} color={color} />
          </ButtonContainer>
        )}
      </StyledTooltip>
    </Container>
  );
};

ActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  tooltip: PropTypes.string.isRequired,
  tipPosition: PropTypes.string
};

export default ActionButton;