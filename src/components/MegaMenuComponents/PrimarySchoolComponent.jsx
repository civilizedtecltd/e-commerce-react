import React from 'react';
import {categoryClass} from "../../inc/users/users";
import {Lia} from "../LiComponent/CommonLiComponent";

const PrimarySchool = () => {
    return (
        <>
            {categoryClass.primarySchool.map((item, index) => <Lia
                key={`primary-${index}`}
                Title={item}
                Url={'/'}
            />)}
        </>
    );
};

export default PrimarySchool;
