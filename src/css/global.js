import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
        border: 1px solid #2D033B;
    }

    label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    input[type="radio"] {
        appearance: none;
        border: 2px solid #2D033B;
        width: 20px;
        height: 20px;
        cursor: pointer;
        border-radius: 50%;
        outline: none;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before{
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #2D033B;
            border-radius: 50%;
            opacity: 0;
            transition: all 100ms ease-in-out;
        }

        &:checked:before {
            opacity: 1;
        }

        &:focus {
            box-shadow: 0 0 5px #2D033B;
        }
    }

    input[type="checkbox"] {
        appearance: none;
        border: 2px solid #2D033B;
        width: 20px;
        height: 20px;
        cursor: pointer;
        outline: none;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before{
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #2D033B;
            opacity: 0;
            transition: all 100ms ease-in-out;
        }

        &:checked:before {
            opacity: 1;
        }

        &:focus {
            box-shadow: 0 0 5px #2D033B;
        }
    }
    
`;

export default GlobalStyle;
