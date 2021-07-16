import styled from 'styled-components';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutMenu';

function ProfileUser(props) {
    return (
        <Box>
            <a href={`http://github.com/${props.user}`}>
                <img src={`http://github.com/${props.user}.png`} style={{borderRadius: '8px'}} />
            </a>
        </Box>
    )
}

export default function Home() {

    const githubUser = 'luisseidel';
    const pessoasFavoritas = [
        'juunegreiros', 'omariosouto', 'peas', 
        'rafaballerini', 'filipedeschamps',
        'diego3g'
    ]

    return (
        <>
            <AlurakutMenu />
            <MainGrid>
                <div className="profileArea" style={{ gridArea:"profileArea" }}>
                    <ProfileUser user={githubUser} />
                </div>
                <div className="welcomeArea" style={{ gridArea:"welcomeArea" }}>
                    <Box>
                        <h1 className="title">Bem vindo</h1>
                        <OrkutNostalgicIconSet />
                    </Box>
                </div>
                <div className="profileRelationsArea" style={{ gridArea:"profileRelationsArea" }}>
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smallTitle">Amigos ({pessoasFavoritas.length})</h2>

                        <ul>
                        {
                            pessoasFavoritas.map((p) => {
                                return (
                                    <li>
                                        <a href={`/users/${p}`} key={p}>
                                            <img src={`https://github.com/${p}.png`} />
                                            <span>{p}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </ProfileRelationsBoxWrapper>
                    <Box>
                        <h2 className="smallTitle">Comunidades</h2>
                        
                    </Box>
                </div>
            </MainGrid>
        </>
    )
}
