import { userFeed } from "./data/data"

function Post(props) {
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.userAvatar} />
          {props.userName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.postContent} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.lastLikeUserAvatar} />
          <div className="texto">
            Curtido por <strong>{props.lastLikeUserName}</strong> e <strong>outras {props.numLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Posts() {
  return (
    <div className="posts">
      {userFeed.map(element => <Post key={element.key} userAvatar={element.avatar} userName={element.usuario} postContent={element.postImg} lastLikeUserAvatar={element.lastUserAvatar} lastLikeUserName={element.lastUser} numLikes={element.numCurtidas} />)}
    </div>
  )
}