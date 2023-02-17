import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* border: 1px solid blue; */
    }

    body, html {
        font-family: 'Poppins', sans-serif;
        color: #2D033B;
    }

    h1 {
        font-weight: 700;
    }
    
    h2, h3, h4 {
        font-weight: 500;
    }

    input {
        margin: 0.4rem;
    }
    
`;

export default GlobalStyle;
