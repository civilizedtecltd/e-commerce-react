import React,{useState} from 'react';

import {Tabs,Tab}  from 'react-bootstrap';
import '../../assets/css/productTab.css'
import reviewAvatar from "../../assets/images/reviews_avater.jpg"

function TabComponent() {
    const [key, setKey] = useState('description');
    return (
        <div className="productDetailsTabs">
            <Tabs defaultActiveKey="description" id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab className="productDes" eventKey="description" title="Description">
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ratione in beatae earum
                        , optio modi doloribus dolorem facilis, incidunt rerum molestias eligendi
                        consequuntur adipisci dolore neque at a cupiditate expedita tenetur!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum accusantium
                        inventore nemo dolores quasi, veniam consequatur nulla iure distinctio totam tempora vel nam ad.
                        Provident rem velit accusamus earum aliquam?
                        nt magni, officia earum voluptatum. Quibusdam, minima perferendis voluptatem modi rem sapiente distinctio!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporenim ipsam voluptatem quia voluptas quia non numquam eius. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </Tab>


                <Tab eventKey="specifications" title="Specifications">
                    <ul class="specifications">
                        <li><strong>Author :</strong> Sam Smith</li>
                        <li><strong>Discipline : </strong> Math</li>
                        <li><strong>Stage : </strong> Class 2</li>
                        <li><strong>Publishing house : </strong> Lorem Ipsum</li>
                        <li><strong>Publishing year </strong> 2012</li>
                        <li><strong>Book cover : </strong> Lorem ipsum</li>
                        <li><strong>Language : </strong> English</li>
                        <li><strong>Number of pages : </strong> 135</li>
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
                                                <ul class="productReviewStar justify-content-end">
                                                    <li class="5star"><i class="fas fa-star"></i></li>
                                                    <li class="5star"><i class="fas fa-star"></i></li>
                                                    <li class="5star"><i class="fas fa-star"></i></li>
                                                    <li class="5star"><i class="fas fa-star"></i></li>
                                                    <li class="star"><i class="fas fa-star"></i></li>
                                                </ul>
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
                                                <ul class="productReviewStar justify-content-end">
                                                    <li class="5star"><i class="fas fa-star"></i></li>
                                                    <li class="5star"><i class="fas fa-star"></i></li>
                                                    <li class="5star"><i class="fas fa-star"></i></li>
                                                    <li class="5star"><i class="fas fa-star"></i></li>
                                                    <li class="star"><i class="fas fa-star"></i></li>
                                                </ul>
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
                                                <ul class="productReviewStar justify-content-end">
                                                    <li class="5star"><i class="fas fa-star"></i></li>
                                                    <li class="5star"><i class="fas fa-star"></i></li>
                                                    <li class="5star"><i class="fas fa-star"></i></li>
                                                    <li class="5star"><i class="fas fa-star"></i></li>
                                                    <li class="star"><i class="fas fa-star"></i></li>
                                                </ul>
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
                        <ul class="productReviewStar postReviewStar mb-3">
                            <li class="5star"><i class="fas fa-star"></i></li>
                            <li class="5star"><i class="fas fa-star"></i></li>
                            <li class="5star"><i class="fas fa-star"></i></li>
                            <li class="5star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                        </ul>

                        <form class="postReviewsForm">
                            <textarea name="" id="" cols="30" rows="5" placeholder="Share your experience"></textarea>
                            <button class="btn btn-primary mt-3">Post a review</button>
                        </form>
                    </div>

                </Tab>
            </Tabs>
        </div>
    );
}

export default TabComponent;
