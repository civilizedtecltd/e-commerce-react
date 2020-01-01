import React from 'react';
import {connect} from 'react-redux';
import {LiSpan} from "../LiComponent/CommonLiComponent";

const Discipline = (props) => {
    return (
        <div>
            {props.disciplines.map((data, index) => (
                <LiSpan
                    key={index}
                    Url={`/shop/filter/category/discipline/${data.id}`}
                    itemName={data.name}
                    Value={data.total_books}
                />)
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    disciplines: state.filter.disciplines
})

export default connect(mapStateToProps, null)(Discipline);
