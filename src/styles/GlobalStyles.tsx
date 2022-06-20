// src/styles/GlobalStyles.tsx
import React from "react";
import { Global } from "@emotion/react";
import tw, { css, theme, GlobalStyles as BaseStyles } from "twin.macro";

const WebkitTapHighlightColor = theme`colors.purple.500`;

const customStyles = css({
  body: {
    WebkitTapHighlightColor,
    ...tw`antialiased`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
