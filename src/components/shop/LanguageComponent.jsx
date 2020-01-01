import React from 'react';
import {connect} from 'react-redux';
import {LiSpan} from "../LiComponent/CommonLiComponent";

const Language = (props) => {
    return (
        <>
            {props.languages.map((data, index) => (
                <LiSpan
                    key={index}
                    Url={`/shop/filter/category/language/${data.id}`}
                    itemName={data.name}
                    Value={data.total_books}
                />)
            )}
        </>
    );
};

const mapStateToProps = state => ({
    languages: state.filter.languages
})

export default connect(mapStateToProps, null)(Language);
