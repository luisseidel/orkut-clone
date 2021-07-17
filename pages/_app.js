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
