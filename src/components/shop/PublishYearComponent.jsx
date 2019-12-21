import React from 'react';
import publish_year from "../../inc/shop/publish_year";
import {LiSpan} from "../LiComponent/CommonLiComponent";

const PublishYear = () => {
    return (
        <div>
            {publish_year.map((data, index) => (
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

export default PublishYear;
