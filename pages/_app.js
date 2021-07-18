import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutMenu';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #d9e6f6;
        font-family: sans-serif;
    }

    #__next {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    button, a {
        cursor: pointer;
        &:hover {
            filter: brightness(1.2);
            transition: filter ease-in-out 0.3s;
        }
    }
    /* Style the tab */
    .tab {
        overflow: hidden;
        border: 1px solid transparent;
        background-color: transparent;
        
        button {
            margin-right: 8px;
        }
    }

    /* Style the tab content */
    .tabcontent {
        display: none;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
        animation: fadeEffect 1s; 
    }

    .tablinks.active {
        background-color: #333;
        color: white;
    }

    /* Go from zero to full opacity */
    @keyframes fadeEffect {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    $(AlurakutStyles)
`

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
