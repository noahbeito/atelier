import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Font Awesome 5 Free";
    src: url('/assets/fonts/font-awesome/fa-free-solid-900.otf');
  }
`;

const theme = {
  primaryColor: 'white',
  secondaryColor: 'teal',
};

function Theme({ children, ...props }) {
  return <ThemeProvider theme={theme} {...props}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalStyle, Theme };
