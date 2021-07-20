import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutMenu';
import { React, useState, useEffect } from 'react';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelationsBoxWrapper';
import { AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutMenu';

function GitFollowers(props) {
    return (
        <ProfileRelationsBoxWrapper as="aside">
            <h2 className="smallTitle">{props.title} ({props.items.length})</h2>

            <ul>
            {
                props.items.map((p) => {
                    return (
                        <li key={p.id}>
                            <a href={`/users/${p.title}`}>
                                <img src={p.avatar_url} />
                                <span>{p.login}</span>
                            </a>
                        </li>
                    )
                })
            }
            </ul>
        </ProfileRelationsBoxWrapper>
    )
}

function Comunidades(props) {
    return (
        <ProfileRelationsBoxWrapper as="aside">
            <h2 className="smallTitle">{props.title} ({props.items.length})</h2>

            <ul>
            {
                props.items.map((p) => {
                    return (
                        <li key={p.id}>
                            <a href={`/comunities/${p.id}`}>
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

    function handleCriarComunidade(event) {
        event.preventDefault();
        
        const dadosForm = new FormData(event.target);

        const comunidade = {
            title: dadosForm.get('title'),
            image: (dadosForm.get('image') ? dadosForm.get('image') : `https://picsum.photos/200/300?${Math.trunc(Math.random()*10000)}`),
            slug: githubUser,
        }

        fetch('/api/comunidades', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comunidade)
        })
        .then(async (response) => {
            const dados = await response.json();
            const comu = dados.registroCriado;
            setComunidades([...comunidades, comu]);
        })

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
        })
        .catch((error) => {
            console.error(error);
        });
    }

    function getComunidades() {
        fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Authorization': 'e9fffaa3fe01b1f24edac8224bcde6',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "query": 
                `query {
                    allCommunities {
                        id
                        title
                        image
                        slug
                    }
                }`
            })
        })
        .then((response) => response.json())
        .then((respostaCompleta) => {
            const comunidadesDato = respostaCompleta.data.allCommunities;
            setComunidades(comunidadesDato);
        })
    }


    const githubUser = 'luisseidel';
    const [comunidades, setComunidades] = useState([]);
    const [seguidores, setSeguidores] = useState([]);
    
    useEffect(() => {
        getGitFollowers('luisseidel');
        getComunidades();
    }, []);

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
                            <h3 className="subTitle">Adicionar Amigo</h3>
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
                    <GitFollowers title="Seguidores Github" items={seguidores} />
                    <Comunidades title="Comunidades" items={comunidades} />
                </div>
            </MainGrid>
        </>
    )
}
