import React from 'react';
import book_cover from "../../inc/shop/book_cover";
import {LiSpan} from "../LiComponent/CommonLiComponent";

const BookCover = () => {
    return (
        <div>
            {book_cover.map((data, index) => (
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

export default BookCover;
