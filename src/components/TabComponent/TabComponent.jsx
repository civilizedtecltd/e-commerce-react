import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Tabs,Tab}  from 'react-bootstrap';
import RatingComponent from '../ratingComponent/Rating';
import ReviewComponent from './ReviewComponent';
import checkAuth from '../../helpers/checkAuth';

import { postReview } from '../../redux/actions/bookActions';

import '../../assets/css/productTab.css'


function TabComponent(props) {

    const [key, setKey] = useState('description');
    const [newReview, setNewReview] = useState({});

    const spec = props.specification[0];

    const getReview = (e) => {
        setNewReview({
            ...newReview,
            comment: e.target.value
        })
    }

    const getRating = (rating) => {
        setNewReview({
            ...newReview,
            reviewer_rating: rating
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const reviewInfo = {
            ...newReview,
            book_id: spec.id
        }

        if(!checkAuth()){
            props.routeHistory.push("/login")
        }else{
            console.log(reviewInfo);
            props.postReview(reviewInfo)
        }

    }


    return (
            ( props.description === undefined || props.reviews === undefined || spec === undefined) ? <></> : (

             <div className="productDetailsTabs">
                <Tabs defaultActiveKey="description" id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab className="productDes" eventKey="description" title="Description">
                    <p>{props.description}</p>
                </Tab>

                <Tab eventKey="specifications" title="Specifications">
                    <ul className="specifications">
                        <li><strong>Author :</strong>{ (spec.author !== undefined )? spec.author : ``}</li>
                        <li><strong>Discipline : </strong>{ (spec.discipline !== undefined )? spec.discipline : ``}</li>
                        <li><strong>Stage : </strong>{ (spec.stage !== undefined )? spec.stage : ``}</li>
                        <li><strong>Publishing house : </strong> { (spec.publisher !== undefined )? spec.publisher : ``}</li>
                        <li><strong>Publishing year </strong> { (spec.publishing_year !== undefined )? spec.publishing_year : ``}</li>
                        <li><strong>Book cover : </strong>{ (spec.book_cover !== undefined )? spec.book_cover : ``}</li>
                        <li><strong>Language : </strong>{ (spec.language !== undefined )? spec.language : ``}</li>
                        <li><strong>Number of pages : </strong>{ (spec.page_number !== undefined )? spec.page_number : 0 }</li>
                    </ul>
                </Tab>

                <Tab eventKey="Reviews" title={`Reviews(${props.reviews.length})`}>

                    <div className="productReviews clearfix">
                            {
                                props.reviews.map((item, index) => {
                                    return <ReviewComponent
                                             key={index}
                                             name={item.reviewer_name}
                                             date={item.review_date}
                                             comment={item.comment}
                                             rating={item.reviewer_rating}
                                            />
                                })
                            }
                    </div>

                    <div className="postReviews clearfix">
                        <h3>Post a review</h3>
                        <RatingComponent callback = {getRating}/>

                        <form className="postReviewsForm">
                            <textarea cols="30" rows="5" placeholder="Share your experience" onChange={getReview}></textarea>
                            <button className="btn btn-primary mt-3" onClick={onSubmit}>Post a review</button>
                        </form>
                    </div>

                </Tab>

            </Tabs>
            </div>
        )
    );
}

const mapDispatchToProps = dispatch =>({
    postReview: (review) => dispatch(postReview(review))
})

export default connect(null, mapDispatchToProps)(TabComponent);
