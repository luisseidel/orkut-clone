import styled from 'styled-components';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutMenu';
import {React, useState} from 'react';

function ProfileUser(props) {

    const gitLink = `https://github.com/${props.user}`;

    return (
        <Box as="aside">
            <img src={`${gitLink}.png`} alt="user-foto" style={{borderRadius: '8px'}} />
            <hr />

            <p>
                <a className="boxLink" href={gitLink}>
                    @{props.user}
                </a>
            </p>
            <hr />

            <AlurakutProfileSidebarMenuDefault />
        </Box>
    )
}

export default function Home() {

    const githubUser = 'luisseidel';
    const [pessoas, setPessoas] = useState([]);
    const [comunidades, setComunidades] = useState([]);

    function handleCriarComunidade(event) {
        event.preventDefault();
        
        const dadosForm = new FormData(event.target);

        const comunidade = {
            id: new Date().toISOString(),
            title: dadosForm.get('title'),
            image: (dadosForm.get('title')) 
            ? `https://github.com/${dadosForm.get('title')}.png` 
            : `https://picsum.photos/200/300?${Math.trunc(Math.random()*10000)}`,
        }

        setComunidades([...comunidades, comunidade]);
    }

    function handleCriarPessoas(event) {
        event.preventDefault();
        
        const dadosForm = new FormData(event.target);

        const pessoa = {
            id: new Date().toISOString(),
            title: dadosForm.get('title'),
            image: (dadosForm.get('title')) 
            ? `https://github.com/${dadosForm.get('title')}.png` 
            : `https://picsum.photos/200/300?${Math.trunc(Math.random()*10000)}`,
        }

        setPessoas([...pessoas, pessoa]);
    }

    return (
        <>
            <AlurakutMenu />
            <MainGrid>
                <div className="profileArea" style={{ gridArea:"profileArea" }}>
                    <ProfileUser user={githubUser} />
                </div>
                <div className="welcomeArea" style={{ gridArea:"welcomeArea" }}>
                    <Box as="aside">
                        <h1 className="title">Bem vindo</h1>
                        <OrkutNostalgicIconSet />
                    </Box>

                    <Box as="aside">
                        <h2 className="subTitle">O que você deseja fazer?</h2>

                        <h3 className="subTitle">Criar Comunidade</h3>
                        <form action="" onSubmit={(event) => handleCriarComunidade(event)}>
                            <div>
                                <input 
                                    type="text" 
                                    name="title"
                                    placeholder="Qual vai ser o nome da comunidade?"
                                    aria-label="Qual vai ser o nome da comunidade?"
                                />
                            </div>
                            <div>
                                <input 
                                    type="text"
                                    name="image" 
                                    placeholder="Coloque uma URL de imagem para a capa"
                                    aria-label="Coloque uma URL de imagem para a capa"
                                />
                            </div>

                            <button type="submit">Criar Comunidade</button>
                        </form>

                        <h3 className="subTitle">Adicionar Pessoa</h3>
                        <form action="" onSubmit={(e) => handleCriarPessoas(e)}>
                            <div>
                                <input 
                                    type="text" 
                                    name="title"
                                    placeholder="Nome de Usuário Github?"
                                    aria-label="Nome de Usuário Github?"
                                />
                            </div>

                            <button type="submit">Adicionar</button>
                        </form>
                    </Box>
                </div>
                <div className="profileRelationsArea" style={{ gridArea:"profileRelationsArea" }}>
                    <ProfileRelationsBoxWrapper as="aside">
                        <h2 className="smallTitle">Amigos ({pessoas.length})</h2>

                        <ul>
                        {
                            pessoas.map((p) => {
                                return (
                                    <li key={p.id}>
                                        <a href={`/users/${p.title}`}>
                                            <img src={p.image} />
                                            <span>{p.title}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </ProfileRelationsBoxWrapper>
                    
                    <ProfileRelationsBoxWrapper as="aside">
                        <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
                        <ul>
                        {
                            comunidades.map((p) => {
                                return (
                                    <li key={p.id}>
                                        <a href={`/users/${p.title}`}>
                                            <img src={p.image} />
                                            <span>{p.title}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </ProfileRelationsBoxWrapper>
                </div>
            </MainGrid>
        </>
    )
}
