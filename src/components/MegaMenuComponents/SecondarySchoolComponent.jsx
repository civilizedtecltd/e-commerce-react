import React from 'react';
import {categoryClass} from "../../inc/users/users";
import {Lia} from "../LiComponent/CommonLiComponent";

const SeconderySchool = () => {
    return (
        <>
            {categoryClass.secondarySchool.map((item, index) => <Lia
                key={`secondary-${index}`}
                Title={item}
                Url={'/'}
            />)}
        </>
    );
};

export default SeconderySchool;
