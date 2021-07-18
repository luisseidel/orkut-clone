import {AlurakutProfileSidebarMenuDefault} from '../../../src/lib/AlurakutMenu';

export default function ProfileUser(props) {

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