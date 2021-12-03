import Sidebar from "./Sidebar";
import Conteudo from "./Conteudo";

export default function Corpo() {
    return (
        <div className="corpo">
            <Conteudo />
            <Sidebar />
        </div>
    )
}