import React from 'react';
import {connect} from 'react-redux';
import {LiSpan} from "../LiComponent/CommonLiComponent";

const Author = (props) => {
    return (<>
            {props.authors.map((data, index) => (
                <LiSpan
                    key={index}
                    Url={`/shop/filter/category/author/${data.id}`}
                    itemName={data.name}
                    Value={data.total_books}
                />)
            )}

        </>)
};

const mapStateToProps = state => ({
    authors: state.filter.authors
})

export default connect(mapStateToProps, null)(Author);
