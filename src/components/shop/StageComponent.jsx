import React from 'react';
import {connect} from 'react-redux';
import {LiSpan} from "../LiComponent/CommonLiComponent";

const StageComponent = (props) => {

    const stages = (props.stages) ? props.stages : [];
    return (
        <div>
            {stages.map((data, index) => (
                <LiSpan
                    key={index}
                    Url={`/shop/filter/category/${data.category_id}/stage/${data.id}`}
                    itemName={data.stage}
                    Value={data.total_books}
                />)
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    stages: state.filter.stages
})

export default connect(mapStateToProps, null)(StageComponent);
