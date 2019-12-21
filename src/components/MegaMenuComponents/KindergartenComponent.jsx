import React from 'react';
import {categoryClass} from "../../inc/users/users";
import {Lia} from "../LiComponent/CommonLiComponent";

const Kindergarten = () => {
    return (
        <>
            {categoryClass.kindergartenSchool.map((pre, index) => <Lia
                key={`kindergarten-${index}`}
                Title={pre}
                Url={'/'}
            />)}
        </>
    );
};

export default Kindergarten;
