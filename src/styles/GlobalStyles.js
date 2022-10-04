import { createGlobalStyle } from 'styled-components';
import themeList from '../data/themeList';

// Typography
import '@fontsource/ubuntu';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

const GlobalStyles = createGlobalStyle`
:root{
  /* colors */
  --darkBlue_1: #3B447A;
  --darkBlue_2: #222B5F;
  --darkBlue_3: #0A0F19;
  --darkBlue_4: #101826;
  --mediumSlateBlue: #6C62E2;
  --lightBlue_1: #F3F1FE;
  --lightBlue_2: #ADBDE3;
  --white: #FFFFFF;
  --black: #000000;

  /* others */
    --header-height: 50px;
}
* {
  scroll-snap-align: center;
  -webkit-scroll-snap-align: center;
}
html{
  font-size: 10px;
}
body{
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
  font-family: 'Ubuntu', sans-serif;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  cursor: pointer;
}
ul, li{
  list-style: none;
}
.container{
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
img, svg{
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyles;
