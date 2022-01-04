import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    primary: "#00E07E",
    primaryDark: "#008857",
    lightGray: "rgba(0, 0, 0, 0.1);",
    darkGray: "rgba(0, 0, 0, 0.3);",
  },

  boxShadow: {
    normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
