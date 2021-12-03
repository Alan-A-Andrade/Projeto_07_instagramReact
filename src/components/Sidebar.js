import Sugestions from "./SugestUser"
import { User } from "./data/data"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="usuario">
        <img src={User.avatar} alt={User.usuario} />
        <div className="texto">
          <strong>{User.usuario}</strong>
          {User.apelido}
        </div>
      </div>


      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        <Sugestions />
      </div>

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  )
}