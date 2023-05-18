import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Font Awesome 5 Free";
    src: url('/assets/fonts/font-awesome/fa-free-solid-900.otf');
  }
  body {
    font-family: 'Lexend Deca';
  }

  textarea, input {
    font-family: verdana;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
  scroll-behavior: smooth;
}
`;

const theme = {
  bpTablet: '1080px',
  bpMobile: '720px',

  primaryColor: 'white',
  secondaryColor: 'teal',
  background: '#eee',
  loading: 'gray',
  textColor: '#333',
  onSell: '#bb3838',
  star: 'gold',
  backdropColor: 'rgba(152, 205, 222, 0.5)',
  marker: '#ffffbf',
  warning: '#bebe48',
  toast: '#ffadad',
};

function Theme({ children, ...props }) {
  return (
    <ThemeProvider
      theme={theme}
      {...props}
    >
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.shape({
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
  }).isRequired,
};

export { GlobalStyle, Theme };
