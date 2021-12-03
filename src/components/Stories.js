import { userStories } from "./data/data"

function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.userAvatar} alt={props.userName} />
      </div>
      <div className="usuario">
        {props.userName}
      </div>
    </div>
  )
}

export default function Stories() {
  return (
    <div className="stories">
      {userStories.map(element => <Story key={element.key} userName={element.usuario} userAvatar={element.img} />)}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}