import React from 'react';
import {categoryClass} from "../../inc/users/users";
import {Lia} from "../LiComponent/CommonLiComponent";

const Stationery = () => {
    return (
        <>
            {categoryClass.stationery.map((item, index) => <Lia
                key={`stationary-${index}`}
                Title={item}
                Url={'/'}
            />)}
        </>
    );
};

export default Stationery;
