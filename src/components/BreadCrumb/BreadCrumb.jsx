import React from 'react';
import { Link } from 'react-router-dom'
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

const PureBreadcrumbs = ({ breadcrumbs }) => (
    <div className="breadcrumbs">

        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {breadcrumbs.map(({ breadcrumb, match }, index) => (
                    <div key={match.url}>
                        <li className="breadcrumb-item"><Link to={match.url || ""}>{breadcrumb}</Link>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{index < breadcrumbs.length - 1 && "/"}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        </li>
                    </div>
                ))}
            </ol>
        </nav>

    </div>
);

export default withBreadcrumbs()(PureBreadcrumbs);
