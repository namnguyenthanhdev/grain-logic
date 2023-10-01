import css from 'styled-jsx/css';

export const colors = {
  white100: "#FFFFFF",
  white80: "#ffffff80",
  white50: "#ffffff50",

  gray8: "rgba(255, 255, 255, 0.08)",
  gray50: "rgba(255, 255, 255, 0.5)",
  gray30: "rgba(255, 255, 255, 0.3)",

  black16: "rgba(27, 27, 27, 0.16)",

  blue100: '#3245ed',
  purple100: '#7e2ce7',
};

export const shadows = {
  shadow1: `0 8px 16px 0 ${colors.black16}`,
};

export const gradients = css`
  &.border {
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(to right, ${colors.white100}, ${colors.white50}) 1;
  }
`
