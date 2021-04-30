import './menu-item.styles.scss'

import { useHistory, useRouteMatch } from "react-router-dom";

const MenuItem = ({ title, imgUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();
  
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
        className="background-image"></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem