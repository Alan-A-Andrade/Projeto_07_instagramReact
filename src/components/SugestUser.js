import { SugestedUsers } from "./data/data";




function SugestUser(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.userAvatar} alt={props.userName} />
                <div className="texto">
                    <div className="nome">{props.userName}</div>
                    <div className="razao">{props.reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}


export default function Sugestions() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {SugestedUsers.map(element => <SugestUser userAvatar={element.avatar} userName={element.usuario} reason={(element.razao)} key={element.key} />)}
        </div>
    )
}