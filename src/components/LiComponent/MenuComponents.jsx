import React from 'react';
import {NavLink} from 'react-router-dom';

function Menu({NavItem, ClassName, Title, Url, ActiveClassName, IconName}){
    return (
        <>
            <li className={NavItem}>
                <NavLink exact activeClassName={ActiveClassName} className={ClassName} to={Url}><i className={IconName}></i>{Title}</NavLink>
            </li>
        </>
    )
}


export default Menu;
