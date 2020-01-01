import React from 'react';
import {connect} from 'react-redux';
import {LiSpan} from "../LiComponent/CommonLiComponent";

const PublishHouse = (props) => {
    return (
        <div>
            {props.publishers.map((data, index) => (
                <LiSpan
                    key={index}
                    Url={`/shop/filter/category/publisher/${data.id}`}
                    itemName={data.name}
                    Value={data.total_books}
                />)
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    publishers: state.filter.publishers
})

export default connect(mapStateToProps)(PublishHouse);
