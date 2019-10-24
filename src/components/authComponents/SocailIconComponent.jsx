import React from 'react'
import {Link} from 'react-router-dom';

export default function SocailIconComponent({ListClass, Url, SocialIcon }) {
    return (
        <>
            <li className={ListClass}>
                <Link to={Url}>
                    <i className={SocialIcon}></i>
            </Link></li>
        </>
    )
}
