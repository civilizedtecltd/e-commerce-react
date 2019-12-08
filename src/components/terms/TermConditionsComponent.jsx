import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";

//fake DB
import TermNavDB from '../../inc/terms/TermNavDB';

//custom css
import './term.css'

const TermSideNav = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (<>
        {TermNavDB.map((term, index) =>
            <li className={term.li_class} key={index}>
                <NavLink exact activeClassName={term.active_link} className={term.a_class} to={term.url}>{term.name}</NavLink>
            </li>
        )}
    </>)
}
export default TermSideNav;
