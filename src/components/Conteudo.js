import Stories from "./Stories";
import Posts from "./Posts";

export default function Conteudo() {
    return (
        <div className="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}