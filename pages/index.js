import styled from 'styled-components';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutMenu';
import { React, useState, useEffect } from 'react';
import { ProfileUser } from '../src/components/ProfileUser';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import {AlurakutProfileSidebarMenuDefault} from '../src/lib/AlurakutMenu';

function ProfileRelationsBox(props) {
    return (
        <ProfileRelationsBoxWrapper as="aside">
            <h2 className="smallTitle">{props.title} ({props.items.length})</h2>

            <ul>
            {
                props.items.map((p) => {
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
    )
}

export default function Home() {

    function getGitFollowers(gitUser) {
        var link = `https://api.github.com/users/${gitUser}/followers`;

        fetch(link)
        .then((resposta) => {
            if (resposta.ok) {
                return resposta.json();
            }

            throw new Error(`Aconteceu algum problema :( - ${resposta.status}`)
        })
        .then((respostaConvertida) => {
            setSeguidores(respostaConvertida);
            console.log(respostaConvertida);
        })
        .catch((error) => {
            console.error(error);
        });
    }

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

    function openTab(evt, tabName) {
        // Get all elements with class="tabcontent" and hide them
        var tabcontent = Array.from(document.getElementsByClassName("tabcontent"));
        tabcontent.forEach(tc => {
            tc.style.display = 'none';
        });

        var tablinks = Array.from(document.getElementsByClassName("tablinks"));
        tablinks.forEach(tb => {
            tb.classList.remove('active');
        });
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        
        if (tabName == 'comunidades') {
            var btnComunidade = document.getElementById('btn-comunidade');
            btnComunidade.classList.add('active');

        } else if (tabName == 'pessoas') {
            var btnPessoa = document.getElementById('btn-pessoa');
            btnPessoa.classList.add('active');
        }
    }

    const githubUser = 'luisseidel';
    const [pessoas, setPessoas] = useState([]);
    const [comunidades, setComunidades] = useState([]);
    const [seguidores, setSeguidores] = useState([]);
    
    useEffect(() => {
        getGitFollowers('luisseidel')
    }, [seguidores]);

    return (
        <>
            <AlurakutMenu />
            <MainGrid>
                <div className="profileArea" style={{ gridArea:"profileArea" }}>
                <Box as="aside">
                    <img src={`https://github.com/${githubUser}.png`} alt="user-foto" style={{borderRadius: '8px'}} />
                    <hr />

                    <p>
                        <a className="boxLink" href={`https://github.com/${githubUser}`}>
                            @{githubUser}
                        </a>
                    </p>
                    <hr />

                    <AlurakutProfileSidebarMenuDefault />
                </Box>
                </div>

                <div className="welcomeArea" style={{ gridArea:"welcomeArea" }}>
                    <Box as="aside">
                        <h1 className="title">Bem vindo</h1>
                        <OrkutNostalgicIconSet />
                    </Box>

                    <Box as="aside">
                        <h2 className="subTitle">O que você deseja fazer?</h2>

                        <div className="tab">
                            <button id="btn-comunidade"
                                    className="tablinks" 
                                    onClick={() => openTab(event, 'comunidades')}>
                                        Criar Comunidade
                            </button>
                            <button id="btn-pessoa"
                                    className="tablinks" 
                                    onClick={() => openTab(event, 'pessoas')}>
                                        Adicionar Pessoa
                            </button>
                        </div>

                        <div id="comunidades" className="tabcontent">
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
                        </div>
                        
                        <div id="pessoas" className="tabcontent">
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
                        </div>
                    </Box>
                </div>

                <div className="profileRelationsArea" style={{ gridArea:"profileRelationsArea" }}>
                    <ProfileRelationsBox title="Seguidores" items={seguidores} />
                    <ProfileRelationsBox title="Amigos" items={pessoas} />
                    <ProfileRelationsBox title="Comunidades" items={comunidades} />
                </div>
            </MainGrid>
        </>
    )
}
