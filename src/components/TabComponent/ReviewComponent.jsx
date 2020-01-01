import React from 'react';
import reviewAvatar from "./user.svg"
import TotalRating from '../ratingComponent/TotalRating';


const ReviewComponent = ({name, date, comment, rating,value}) => {
     date = new Date(date).toString();
    return (
        <div className="card singleReview border-0">
            <div className="row no-gutters">
                <div className="col-auto">
                    <div className="reviewUserAvater">
                        <img src={ reviewAvatar } alt="" />
                    </div>
                </div>

                <div className="col pl-2">
                    <div className="reviewCardBody">
                        <div className="row reviewUserInfo">
                            <div className="col mb-2">
                                <h6 className="reviewUserName">{name}<span className="reviewDate">{date}</span></h6>
                            </div>
                            <div className="col">
                            <TotalRating value={ rating} />
                            </div>
                        </div>
                        <p>{comment}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewComponent;
