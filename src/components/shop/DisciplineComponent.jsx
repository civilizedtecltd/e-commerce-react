import React from 'react';
import discipline from "../../inc/shop/discipline";
import {LiSpan} from "../LiComponent/CommonLiComponent";

const Discipline = () => {
    return (
        <div>
            {discipline.map((data, index) => (
                <LiSpan
                    key={index}
                    Url={data.url}
                    itemName={data.name}
                    Value={data.value}
                />)
            )}
        </div>
    );
};

export default Discipline;
