import { SuggestedUsers } from "./data/data";




function SuggestUser(props) {
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


export default function Suggestions() {
    return (
        <div>
            {SuggestedUsers.map(element => <SuggestUser userAvatar={element.avatar} userName={element.usuario} reason={(element.razao)} key={element.key} />)}
        </div>
    )
}