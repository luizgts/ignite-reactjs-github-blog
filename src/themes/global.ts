import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.base_background};
        color: ${props => props.theme.base_text};
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
        line-height: 1.6;
    }
`;