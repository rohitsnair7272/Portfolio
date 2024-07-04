// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset body styles */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    overflow-x: hidden; /* Prevent horizontal overflow */
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 1rem 0;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #282c34;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #61dafb;
    border-radius: 20px;
    border: 3px solid #282c34;
  }

  /* Mobile-specific adjustments */
  @media (max-width: 768px) {
    body {
      /* Custom scrollbar styles for mobile */
      scrollbar-width: thin; /* Firefox */
      scrollbar-color: #61dafb #282c34; /* Firefox */
      -webkit-overflow-scrolling: touch; /* Smooth scrolling for iOS */
      overflow-x: hidden; /* Ensure no horizontal overflow */
    }
  }
`;

export default GlobalStyles;
