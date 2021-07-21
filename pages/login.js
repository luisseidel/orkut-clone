import React, { useState } from 'react';
import { useRouter } from 'next/router';
import nookies from 'nookies';

export default function LoginScreen() {

    const router = useRouter();
    const [githubUser, setGithubUser] = useState('');

    function handleLogin(e) {
        e.preventDefault();

        if (githubUser.length > 0) {

            fetch('https://alurakut.vercel.app/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    githubUser: githubUser
                })
            })
            .then( async (resp) => {
                const dados = await resp.json();
                nookies.set(
                    null, 
                    'USER_TOKEN', 
                    dados.token, {
                        path: '/',
                        maxAge: 86400 * 7
                    }
                );
                
                router.push('/');
            });

        }

    }

    return (
        <main className="login">
            <div className="loginScreen">
                <section className="logoArea">
                    <img src="https://github.com/luisseidel/orkut-clone/raw/main/src/assets/images/orkut-logo.png" />

                    <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
                    <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
                    <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
                </section>

                <section className="formArea">
                    <form className="box" onSubmit={(e) => handleLogin(e)}>
                        <p>
                            Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
                        </p>
                        <input 
                        placeholder="Usuário" 
                        value={githubUser} 
                        onChange={(ev) => {
                            setGithubUser(ev.target.value);
                        }}  />
                        
                        <button type="submit" >
                            Login
                        </button>
                    </form>

                    <footer className="box">
                        <p>
                            Ainda não é membro? <br />
                            <a href="/login">
                                <strong>
                                    ENTRAR JÁ
                                </strong>
                            </a>
                        </p>
                    </footer>
                </section>

            </div>
                <footer className="footerArea">
                    <p>
                        © 2021 @luisgseidel - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
                    </p>
                </footer>
        </main>
    )
}