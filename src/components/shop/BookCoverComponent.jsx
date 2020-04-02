import React from 'react';
import {connect} from 'react-redux';
import book_cover from "../../inc/shop/book_cover";
import {LiSpan} from "../LiComponent/CommonLiComponent";

const BookCover = (props) => {
    return (
        <div>
            {props.book_covers.map((data, index) => (
                <LiSpan

                    key={index}
                    Url={`/shop/filter/category/book-covers/${data.id}`}
                    itemName={data.name}
                    Value={data.total_books}
                />)
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    book_covers: state.filter.book_covers
})

export default connect(mapStateToProps, null)(BookCover);
