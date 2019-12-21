import React from 'react';
import author from "../../inc/shop/author";
import {LiSpan} from "../LiComponent/CommonLiComponent";

const Author = () => {
    return (<>
            {author.map((data, index) => (
                <LiSpan
                    key={index}
                    Url={data.url}
                    itemName={data.name}
                    Value={data.value}
                />)
            )}

        </>)
};

export default Author;
