import React from 'react';
import language from "../../inc/shop/language";
import {LiSpan} from "../LiComponent/CommonLiComponent";

const Language = () => {
    return (
        <>
            {language.map((data, index) => (
                <LiSpan
                    key={index}
                    Url={data.url}
                    itemName={data.name}
                    Value={data.value}
                />)
            )}
        </>
    );
};

export default Language;
