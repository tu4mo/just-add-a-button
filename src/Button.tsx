import React from "react";
import styled from "styled-components";
import { css } from "emotion";
import { useTranslation } from "react-i18next";
import cc from "classcat";
import { useDispatch, useSelector } from "react-redux";
import { click } from "./store";

import styles from "./Button.module.css";

const StyledButton = styled.button`
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
  border: 0;
  color: #fff;
  outline: none;
  padding: 1rem 2rem;

  &:active {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    opacity: 0.9;
    transform: scale(0.96);
  }
`;

const Button = () => {
  const { t } = useTranslation();
  const buttonClicked = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <StyledButton
      className={cc([
        styles.button,
        css`
          background-color: #21d4fd;
          background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
        `,
        "rounded-lg"
      ])}
      onClick={() => dispatch(click())}
    >
      {t(buttonClicked ? "clicked" : "clickMe")}
    </StyledButton>
  );
};

export default Button;
