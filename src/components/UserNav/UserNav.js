import React from 'react';
import { Col } from 'react-bootstrap'
import Menu from '../LiComponent/MenuComponents'
import asideMenu from "../../inc/menu/order_nav_menu";

function UserNav() {
  return (
    <Col sm="2">
      <aside className="userAsideBar pt-3 clearfix shadow" id="userAsideBar">
        <nav className="userNav">
          <ul className="userNavBar">
            {asideMenu.map((data, index) =>
              <Menu
                key={index}
                NavItem={data.nav_item}
                ClassName={data.class}
                Title={data.title}
                Url={data.url}
                IconName={data.icon_name}
                ActiveClassName={data.active_link}
              />
            )}
          </ul>
        </nav>
      </aside>
    </Col>
  );
}

export default UserNav;
