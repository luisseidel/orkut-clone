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

    .login {
        display: flex; 
        flex: 1;
        flex-direction: column;
        align-items: center; 
        justify-content: center;

        .loginScreen {
            display: flex;
            flex: 1;
            align-items: center; 
            justify-content: center;

            height: 100vh;
            width: 100%;
            margin: 50px;
            
            .logoArea {
                height: 80%;
                margin: 0 12px;
                padding: 120px 50px;
                background-color: #f3f3f3;
                border-radius: 6px;

                flex: 3;

                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;

                img {
                    max-width: 50%;
                    margin: 24px;
                }

                strong {
                    color: #ED2590;
                }
            }
        
            .formArea {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                
                flex: 1;
                height: 80%;
                margin: 0 12px;

                form {
                    height: 70%;
                }

                footer {
                    height: 25%;
                }
            
                .box {
                    padding: 40px;

                    background-color: #F3F3F3;
                    border-radius: 6px;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;

                    input {
                        width: 100%;
                        padding: 15px 15px;
                        border-radius: 8px;
                        border: none;
                        margin: 24px 0;
                        
                        outline: none;
                    }

                    button {
                        padding: 15px 15px;
                        border-radius: 8px;
                        width: 100%;
                        outline: none;
                        border: none;
                        background-color: #ED2590;
                        color: white;
                        font-weight: 600;

                        &:hover {
                            filter: brightness(0.8);
                        }

                        &:disabled {
                            background-color: tan;
                        }
                    }
                }
            }
        }
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
