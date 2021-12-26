import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  * {
	font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
     background-color: ${(props) =>
       props.theme === 'dark' ? '#272727' : '#FFFFFF'};
     overflow-x: hidden;
   }

   *:focus {
    outline: none;
   }

      /* width */
    ::-webkit-scrollbar {
      width: 4px;
    }

	    /* Track */
		::-webkit-scrollbar-track {
      background: ${(props) =>
        props.theme === 'dark' ? '#242632' : '#E5E5E5'};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #5a5a5a;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #333;
    }
`;

export default GlobalStyle;