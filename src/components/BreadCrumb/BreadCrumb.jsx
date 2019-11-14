import React from 'react';
import { Link } from 'react-router-dom'
function BreadCrumb(props) {
    return(
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={props.url}>{props.option1}</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{props.option2}</li>
        </ol>
       </nav>
    )
}

export default BreadCrumb;