import React from 'react';
import filterData from "../../inc/shop/stage";
import {LiSpan} from "../LiComponent/CommonLiComponent";

const StageComponent = () => {
    return (
        <div>
            {filterData.map((data, index) => (
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

export default StageComponent;
