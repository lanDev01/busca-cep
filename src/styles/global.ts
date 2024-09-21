import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    :root {
        --text-title: #1E201E;
        --text-body: #3C3D37;

        --outline: #4379F2;
        --border: #EFE7E7;
        --shape: #F5F7F8;
        --background: #E9EFEC; 
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        scroll-behavior: smooth;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        color: var(--text-title);
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            padding-right: 4px;
            width: 20px;
            height: 40px;
            background: transparent;
        }

        &:-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background: #262724;
            border: 6px solid var(--background);
        }
    }

    body, input, textarea, button {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;
