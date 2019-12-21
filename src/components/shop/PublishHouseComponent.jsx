import React from 'react';
import publish_house from "../../inc/shop/publish_house";
import {LiSpan} from "../LiComponent/CommonLiComponent";

const PublishHouse = () => {
    return (
        <div>
            {publish_house.map((data, index) => (
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

export default PublishHouse;
