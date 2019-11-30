import React from 'react';
import { Col } from 'react-bootstrap'
import { LiAi } from "../../components/LiComponent/CommonLiComponent";
import { asideData } from "../../inc/users/users";
function UserNav() {
    return (
      <Col sm="2">
        <aside className="userAsideBar pt-3 clearfix shadow" id="userAsideBar">
          <nav className="userNav">
            <ul className="userNavBar">
              {asideData.map((aside, index) => (
                <LiAi
                  key={index}
                  ListClass={aside.LIST_CLASS}
                  Title={aside.TITLE}
                  Url={aside.URL}
                  IconName={aside.ICON_NAME}
                  AnchorClass={aside.ANCHOR_CLASS}
                />
              ))}
            </ul>
          </nav>
        </aside>
      </Col>
    );
}

export default UserNav;