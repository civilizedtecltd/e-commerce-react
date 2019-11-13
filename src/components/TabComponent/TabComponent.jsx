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
                    <ul class="specifications">
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
                    <div class="productReviews clearfix">

                        <div class="card singleReview border-0">
                            <div class="row no-gutters">
                                <div class="col-auto">
                                    <div class="reviewUserAvater">
                                        <img src={reviewAvatar} alt="" />
                                    </div>
                                </div>

                                <div class="col pl-2">
                                    <div class="reviewCardBody">
                                        <div class="row reviewUserInfo">
                                            <div class="col mb-2">
                                                <h6 class="reviewUserName">Sam Smith <span class="reviewDate">May 26, 12:31</span></h6>
                                            </div>
                                            <div class="col">
                                            <RatingComponent/>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            enim ipsam voluptatem quia voluptas quia non numquam eius.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card singleReview border-0">
                            <div class="row no-gutters">
                                <div class="col-auto">
                                    <div class="reviewUserAvater">
                                        <img src={reviewAvatar} alt="" />
                                    </div>
                                </div>

                                <div class="col pl-2">
                                    <div class="reviewCardBody">
                                        <div class="row reviewUserInfo">
                                            <div class="col mb-2">
                                                <h6 class="reviewUserName">Sam Smith <span class="reviewDate">May 26, 12:31</span></h6>
                                            </div>
                                            <div class="col">
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

                        <div class="card singleReview border-0">
                            <div class="row no-gutters">
                                <div class="col-auto">
                                    <div class="reviewUserAvater">
                                        <img src={reviewAvatar} alt="" />
                                    </div>
                                </div>

                                <div class="col pl-2">
                                    <div class="reviewCardBody">
                                        <div class="row reviewUserInfo">
                                            <div class="col mb-2">
                                                <h6 class="reviewUserName">Sam Smith <span class="reviewDate">May 26, 12:31</span></h6>
                                            </div>
                                            <div class="col">
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
                    <div class="postReviews clearfix">
                        <h3>Post a review</h3>
                       <RatingComponent/>

                        <form class="postReviewsForm">
                            <textarea name="" id="" cols="30" rows="5" placeholder="Share your experience"></textarea>
                            <button class="btn btn-primary mt-3">Post a review</button>
                        </form>
                    </div>

                </Tab>
            </Tabs>
            </div>
        )
    );
}

export default TabComponent;
