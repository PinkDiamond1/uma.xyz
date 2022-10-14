import {
  black,
  blackOpacity25,
  blackOpacity50,
  blackOpacity60,
  blackOpacity75,
  green,
  grey50,
  grey100,
  grey150,
  grey500,
  grey900,
  grey910,
  grey950,
  loadingSkeletonOpacity10,
  loadingSkeletonOpacity100,
  red100,
  red500,
  red500Opacity5,
  red600,
  white,
  white50,
  whiteOpacity10,
} from "constants/colors";
import {
  headerLg,
  headerMd,
  headerSm,
  headerXl,
  headerXs,
  textFine,
  textXXXl,
  textXXl,
  textXl,
  textLg,
  textMd16,
  textMd18,
  textMd20,
  textSm,
  textXs,
} from "constants/fonts";
import { maxSectionWidth } from "constants/breakpoints";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 /* CSS Reset */
 * {
  /* Remove default margin on everything */
  margin: 0;
  /* Remove default padding on everything */
  padding: 0;
  /* Calc em based line height, bigger line height for smaller font size and smaller line height for bigger font size: https://kittygiraudel.com/2020/05/18/using-calc-to-figure-out-optimal-line-height/ */
  line-height: calc(0.25rem + 1em + 0.25rem);
}

/* Use a more-intuitive box-sizing model on everything */
*,
::before,
::after {
  box-sizing: border-box;
}

/* Remove border and set sensible defaults for backgrounds, on all elements except fieldset progress and meter */
*:where(:not(fieldset, progress, meter)) {
  border-width: 0;
  border-style: solid;
  background-origin: border-box;
  background-repeat: no-repeat;
}

html {
  /* Allow percentage-based heights in the application */
  block-size: 100%;
  /* Making sure text size is only controlled by font-size */
  -webkit-text-size-adjust: none;
}

/* Smooth scrolling for users that don't prefer reduced motion */
@media (prefers-reduced-motion: no-preference) {
  html:focus-within {
    scroll-behavior: smooth;
  }
}

body {
  /* Improve text rendering */
  -webkit-font-smoothing: antialiased;
  /* https://marco.org/2012/11/15/text-rendering-optimize-legibility */
  text-rendering: optimizeSpeed;
  /* Allow percentage-based heights in the application */
  min-block-size: 100%;
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter#example_2 */
  /* scrollbar-gutter: stable both-edges; Removed until this bug is fixed: https://bugs.chromium.org/p/chromium/issues/detail?id=1318404#c2 */
}

/* Improve media defaults */
:where(img, svg, video, canvas, audio, iframe, embed, object) {
  display: block;
}
:where(img, svg, video) {
  block-size: auto;
  max-inline-size: 100%;
}

/* Remove stroke and set fill color to the inherited font color */
:where(svg) {
  stroke: none;
  fill: currentColor;
}

/* SVG's without a fill attribute */
:where(svg):where(:not([fill])) {
  /* Remove fill and set stroke color to the inherited font color */
  stroke: currentColor;
  fill: none;
  /* Rounded stroke */
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Set a size for SVG's without a width attribute */
:where(svg):where(:not([width])) {
  inline-size: 5rem;
}

/* Remove built-in form typography styles */
:where(input, button, textarea, select),
:where(input[type="file"])::-webkit-file-upload-button {
  color: inherit;
  font: inherit;
  font-size: inherit;
  letter-spacing: inherit;
}

/* Change textarea resize to vertical only and block only if the browser supports that */
:where(textarea) {
  resize: vertical;
}
@supports (resize: block) {
  :where(textarea) {
    resize: block;
  }
}

/* Avoid text overflows */
:where(p, h1, h2, h3, h4, h5, h6) {
  overflow-wrap: break-word;
}

/* Fix h1 font size inside article, aside, nav, and section */
h1 {
  font-size: 2em;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
:where(ul, ol)[role="list"] {
  list-style: none;
}

/* More readable underline style for anchor tags without a class. This could be set on anchor tags globally, but it can cause conflicts. */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make it clear that interactive elements are interactive */
:where(a[href], area, button, input, label[for], select, summary, textarea, [tabindex]:not([tabindex*="-"])) {
  cursor: pointer;
  touch-action: manipulation;
}
:where(input[type="file"]) {
  cursor: auto;
}
:where(input[type="file"])::-webkit-file-upload-button,
:where(input[type="file"])::file-selector-button {
  cursor: pointer;
}

/* Animate focus outline */
@media (prefers-reduced-motion: no-preference) {
  :focus-visible {
    transition: outline-offset 145ms cubic-bezier(0.25, 0, 0.4, 1);
  }
  :where(:not(:active)):focus-visible {
    transition-duration: 0.25s;
  }
}
:where(:not(:active)):focus-visible {
  outline-offset: 5px;
}

/* Make sure users can't select button text */
:where(button, button[type], input[type="button"], input[type="submit"], input[type="reset"]),
:where(input[type="file"])::-webkit-file-upload-button,
:where(input[type="file"])::file-selector-button {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  text-align: center;
}

/* Disabled cursor for disabled buttons */
:where(button, button[type], input[type="button"], input[type="submit"], input[type="reset"])[disabled] {
  cursor: not-allowed;
}

/* Global style definitions */

  /*  All CSS custom properties that are intended to be global must be defined here */

  html {
    /* Colors */
    --white: ${white};
    --white-opacity-10: ${whiteOpacity10};
    --white-50: ${white50};
    --black: ${black};
    --black-opacity-25: ${blackOpacity25};
    --black-opacity-50: ${blackOpacity50};
    --black-opacity-60: ${blackOpacity60};
    --black-opacity-75: ${blackOpacity75};
    --red-100: ${red100};
    --red-500: ${red500};
    --red-500-opacity-5: ${red500Opacity5};
    --red-600: ${red600};
    --green: ${green};
    --grey-50: ${grey50};
    --grey-100: ${grey100};
    --grey-150: ${grey150};
    --grey-500: ${grey500};
    --grey-900: ${grey900};
    --grey-910: ${grey910};
    --grey-950: ${grey950};
    --loading-skeleton-opacity-100: ${loadingSkeletonOpacity100};
    --loading-skeleton-opacity-10: ${loadingSkeletonOpacity10};
    /* Fonts */
    --header-xl: ${headerXl};
    --header-lg: ${headerLg};
    --header-md: ${headerMd};
    --header-sm: ${headerSm};
    --header-xs: ${headerXs};
    --text-xxxl: ${textXXXl};
    --text-xxl: ${textXXl};
    --text-xl: ${textXl};
    --text-lg: ${textLg};
    --text-md-16: ${textMd16};
    --text-md-18: ${textMd18};
    --text-md-20: ${textMd20};
    --text-sm: ${textSm};
    --text-xs: ${textXs};
    --text-fine: ${textFine};
    --max-section-width: ${maxSectionWidth};
  }
`;
