import React from 'react';
import {connect} from 'react-redux';
import {LiSpan} from "../LiComponent/CommonLiComponent";

const PublishYear = (props) => {
    return (
        <div>
            {props.publishing_years.map((data, index) => (
                <LiSpan

                    key={index}
                    Url={`/shop/filter/category/publishing-year/${data.id}`}
                    itemName={data.name}
                    Value={data.total_books}
                />)
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    publishing_years: state.filter.publishing_years
})

export default connect(mapStateToProps, null)(PublishYear);
