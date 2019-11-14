import React,{useState} from 'react';

import {Tabs,Tab}  from 'react-bootstrap';
import '../../assets/css/productTab.css'
import reviewAvatar from "../../assets/images/reviews_avater.jpg"
import RatingComponent from '../ratingComponent/Rating'

function TabComponent({description, reviews, specification }) {
    const [key, setKey] = useState('description');
    const spec = specification[0];

    return (
            ( description === undefined || reviews === undefined || spec === undefined) ? <></> : (
            <div className="productDetailsTabs">
                <Tabs defaultActiveKey="description" id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab className="productDes" eventKey="description" title="Description">
                    <p>{description}</p>
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
                <Tab eventKey="Reviews" title={`Reviews(${7})`}>
                    <div className="productReviews clearfix">

                        <div className="card singleReview border-0">
                            <div className="row no-gutters">
                                <div className="col-auto">
                                    <div className="reviewUserAvater">
                                        <img src={reviewAvatar} alt="" />
                                    </div>
                                </div>

                                <div className="col pl-2">
                                    <div className="reviewCardBody">
                                        <div className="row reviewUserInfo">
                                            <div className="col mb-2">
                                                <h6 className="reviewUserName">Sam Smith <span className="reviewDate">May 26, 12:31</span></h6>
                                            </div>
                                            <div className="col">
                                            <RatingComponent/>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            enim ipsam voluptatem quia voluptas quia non numquam eius.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card singleReview border-0">
                            <div className="row no-gutters">
                                <div className="col-auto">
                                    <div className="reviewUserAvater">
                                        <img src={reviewAvatar} alt="" />
                                    </div>
                                </div>

                                <div className="col pl-2">
                                    <div className="reviewCardBody">
                                        <div className="row reviewUserInfo">
                                            <div className="col mb-2">
                                                <h6 className="reviewUserName">Sam Smith <span className="reviewDate">May 26, 12:31</span></h6>
                                            </div>
                                            <div className="col">
                                            <RatingComponent/>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            enim ipsam voluptatem quia voluptas quia non numquam eius.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card singleReview border-0">
                            <div className="row no-gutters">
                                <div className="col-auto">
                                    <div className="reviewUserAvater">
                                        <img src={reviewAvatar} alt="" />
                                    </div>
                                </div>

                                <div className="col pl-2">
                                    <div className="reviewCardBody">
                                        <div className="row reviewUserInfo">
                                            <div className="col mb-2">
                                                <h6 className="reviewUserName">Sam Smith <span className="reviewDate">May 26, 12:31</span></h6>
                                            </div>
                                            <div className="col">
                                             <RatingComponent/>
                                            </div>
                                        </div>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            enim ipsam voluptatem quia voluptas quia non numquam eius.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="postReviews clearfix">
                        <h3>Post a review</h3>
                       <RatingComponent/>

                        <form className="postReviewsForm">
                            <textarea name="" id="" cols="30" rows="5" placeholder="Share your experience"></textarea>
                            <button className="btn btn-primary mt-3">Post a review</button>
                        </form>
                    </div>

                </Tab>
            </Tabs>
            </div>
        )
    );
}

export default TabComponent;
