// import { css } from 'styled-components';

// Transition
export function transition(timing = 0.3) {
  return `
      -webkit-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -moz-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -ms-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -o-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
  `;
}

// Border Radius
export function borderRadius(radius = 0) {
  return `
      -webkit-border-radius: ${radius};
      -moz-border-radius: ${radius};
      -ms-transition: ${radius};
      -o-border-radius: ${radius};
      border-radius: ${radius};
  `;
}

// Box Shadow
export function boxShadow(shadow = 'none') {
  return `
      -webkit-box-shadow: ${shadow};
      -moz-box-shadow: ${shadow};
      box-shadow: ${shadow};
  `;
}

// Media Template
// const screenSizes = {
//   desktop: [992],
//   tablet: [768],
//   mobile: [320],
// };
//
// export const media = Object.keys(screenSizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
// 		@media (max-width: ${screenSizes[label]}px) {
// 			${css(...args)}
// 		}
// 	`;
//
//   return acc;
// }, {});
