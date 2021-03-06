import { css, SerializedStyles, useTheme } from "@emotion/react";
import React from "react";
interface Props {
  children: React.ReactNode;
  mb: 0 | 1 | 2 | 3 | 4 | 5;
  styles?: SerializedStyles;
}
const Intro = ({ children, mb, styles }: Props) => {
  const theme = useTheme();
  return (
    <p
      css={css`
        color: ${theme.colors.primary};
        font-weight: ${theme.fontWeights.bold};
        margin-bottom: ${theme.space[mb]}rem;
        ${styles}
      `}
    >
      {children}
    </p>
  );
};

export default Intro;
