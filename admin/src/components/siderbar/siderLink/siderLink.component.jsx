import React from "react";
import { Link as L} from 'react-router-dom';

function SideLink({title, Icon, route}) {
  return (
    <ul className="dash-list  bg-white">
      <li className="text-dark dash-item-list">
        <Icon />
        <L className="nav-link" to={route}>{title}</L>
      </li>
    </ul>
  );
}

export default SideLink;
