import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: sans-serif;
  };

  html, body{
    width: 100%;
    height:100%;
  }
`;
