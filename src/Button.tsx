import React from "react";
import styled from "styled-components";
import { css } from "emotion";
import { useTranslation } from "react-i18next";
import cc from "classcat";

import styles from "./Button.module.css";
console.log(styles);

const StyledButton = styled.button`
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: 0.5rem;
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
  return (
    <StyledButton
      className={cc([
        styles.button,
        css`
          background-color: #21d4fd;
          background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
        `
      ])}
    >
      {t("clickMe")}
    </StyledButton>
  );
};

export default Button;
