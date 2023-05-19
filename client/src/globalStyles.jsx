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

const lightTheme = {
  bpTablet: '1080px',
  bpMobile: '720px',

  primaryColor: 'white',
  secondaryColor: 'teal',
  background: '#eee',
  loading: 'gray',
  textColor: '#333',
  onSell: '#bb3838',
  star: 'gold',
  starBorder: '#333',
  backdropColor: 'rgba(152, 205, 222, 0.5)',
  marker: '#ffffbf',
  warning: '#bebe48',
  toast: '#ffadad',
  header: 'lightblue',
};

const darkTheme = {
  bpTablet: '1080px',
  bpMobile: '720px',

  primaryColor: '#111',
  secondaryColor: '#6485c8',
  background: '#333',
  loading: 'gray',
  textColor: '#eee',
  onSell: '#bb3838',
  star: 'orange',
  starBorder: '#555',
  backdropColor: 'rgba(152, 205, 222, 0.5)',
  marker: '#ffffbf',
  warning: '#bebe48',
  toast: '#ffadad',
  header: '#555',
};

function Theme({ isDarkMode, children, ...props }) {
  return (
    <ThemeProvider
      theme={isDarkMode ? darkTheme : lightTheme}
      {...props}
    >
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  children: PropTypes.shape({
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
  }).isRequired,
};

export { GlobalStyle, Theme };
