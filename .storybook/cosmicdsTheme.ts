import { create } from "@storybook/theming/create";

export default create({
  base: "dark",

  brandTitle: "Vue Toolkit Storybook",
  brandUrl: "https://www.cosmicds.cfa.harvard.edu/",
  brandImage: "https://projects.cosmicds.cfa.harvard.edu/cds-website/logos/logo_cosmicds.jpg",
  brandTarget: "_self",

  colorPrimary: "#f00202",
  colorSecondary: "#093c95",

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2  ,
});
