import React from 'react';
import {connect} from 'react-redux';
//import discipline from "../../inc/shop/discipline";
import {LiSpan} from "../LiComponent/CommonLiComponent";

const Discipline = (props) => {
    return (
        <div>
            {props.discipline.map((data, index) => (
                <LiSpan
                    key={index}
                    Url={''}
                    itemName={data.name}
                    Value={data.total_books}
                />)
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    discipline: state.filter.discipline
})

export default connect(mapStateToProps, null)(Discipline);
