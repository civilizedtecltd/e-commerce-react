import React, { useState } from "react";
import { connect } from "react-redux";
import { Tabs, Tab, Form, Button } from "react-bootstrap";
import RatingComponent from "../../../components/ratingComponent/Rating";
import ReviewComponent from "./../../../components/TabComponent/ReviewComponent";
import checkAuth from "../../../helpers/checkAuth";
import { postReview, showSingleBook } from "../../../redux/actions/bookActions";
import "../../../assets/css/productTab.css";

const ReviewProduct = (props) => {
    const [newReview, setNewReview] = useState({});
    const { postReview } = props;
    const getReview = (e) => {
        e.preventDefault();
        setNewReview({
            ...newReview,
            comment: e.target.value,
        });
    };

    const getRating = (rating) => {
        setNewReview({
            ...newReview,
            reviewer_rating: rating,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const reviewInfo = {
            ...newReview,
            book_id: props.book_id,
        };
        if (!checkAuth()) {
            props.routeHistory.push("/login");
        } else {
            postReview(reviewInfo);
            setNewReview({ reviewer_rating: 0, comment: "" });
        }
    };

    return (
        <div id="reviewSelect">
            <div className="productReviews clearfix">
                {props.reviews.map((item, index) => {
                    return (
                        <ReviewComponent
                            key={index}
                            name={item.reviewer_name}
                            date={item.review_date}
                            comment={item.comment}
                            rating={item.reviewer_rating}
                            value={newReview.reviewer_rating}
                        />
                    );
                })}
            </div>

            <div className="postReviews clearfix">
                <h3>Post a review</h3>

                <Form className="postReviewsForm" onSubmit={onSubmit}>
                    <RatingComponent callback={getRating} />
                    <textarea
                        id="post-text-area"
                        cols="30"
                        rows="5"
                        placeholder="Share your experience"
                        value={newReview.comment}
                        onChange={getReview}
                    ></textarea>
                    <Button type="submit" className="mt-3">
                        Post a review
                    </Button>
                </Form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        post_review: state.book.info,
    };
};
const mapDispatchToProps = (dispatch) => ({
    postReview: (review) => dispatch(postReview(review)),
    showBook: (id) => showSingleBook(id),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewProduct);
