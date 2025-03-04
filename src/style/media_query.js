import { css } from 'styled-components';

export const media = {
  small: (...args) => css`
    @media (max-width: 376px) {
      ${css(...args)}
    }
  `,
  smallMo: (...args) => css`
    @media (max-width: 456px) {
      ${css(...args)}
  }
`,
  mobile: (...args) => css`
    @media (max-width: 576px) {
      ${css(...args)}
    }
  `,
  mediumSmall: (...args) => css`
    @media (max-width: 685px) {
    ${css(...args)}
  }
`,
  medium: (...args) => css`
    @media (max-width: 769px) {
      ${css(...args)}
    }
  `,
  pad: (...args) => css`
    @media (max-width: 861px) {
      ${css(...args)}
  }
`,
  tablet: (...args) => css`
    @media (max-width: 1025px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)}
    }
  `,
  pc: (...args) => css`
    @media (max-width: 1400px) {
      ${css(...args)}
    }
  `,
  pcMore: (...args) => css`
    @media (max-width: 1700px) {
      ${css(...args)}
    }
  `,
};
