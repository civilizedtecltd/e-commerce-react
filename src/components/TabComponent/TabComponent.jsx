import React,{useState} from 'react';

import {Tabs,Tab}  from 'react-bootstrap';

import reviewAvatar from "../../assets/images/reviews_avater.jpg"

function TabComponent() {
    const [key, setKey] = useState('home');
    return (
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
        <Tab className="productDes" eventKey="description" title="Description">
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Ratione in beatae earum
          , optio modi doloribus dolorem facilis, incidunt rerum molestias eligendi 
          consequuntur adipisci dolore neque at a cupiditate expedita tenetur!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum accusantium 
          inventore nemo dolores quasi, veniam consequatur nulla iure distinctio totam tempora vel nam ad.
           Provident rem velit accusamus earum aliquam?
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse dolorem quos, facilis eius error alias labore sint ipsum asperiores temporibus magni veniam molestias consectetur laborum fuga, velit voluptates inventore.
           Perferendis, laudantium! Aperiam, fuga. Reprehenderit consequuntur accusamus quam sunt voluptatibus neque aliquid eius nisi, nostrum, doloribus itaque earum sed repudiandae nobis asperiores minus omnis, officia quaerat? Repellat debitis et impedit.
           Aspernatur ab impedit unde esse suscipit eius ratione placeat, minus sed. Voluptatem dolor ullam doloribus tenetur magnam earum ipsa? Exercitationem, corrupti. Distinctio veniam quisquam id animi saepe, commodi quia quaerat.
           Expedita libero beatae ut temporibus ratione omnis, illum, quos quasi delectus cum tenetur laudantium voluptates, iste quo velit ducimus assumenda? At id rerum eius enim recusandae odio placeat nesciunt mollitia!
           Ut, reiciendis. Distinctio quis corporis quaerat explicabo vero voluptate, aliquid saepe quod id, doloribus sapiente qui deserunt assumenda. Cum quam iure pariatur. Sed odit velit voluptatum necessitatibus praesentium deserunt vitae?
           Ipsam deleniti voluptate cum quibusdam pariatur ratione enim consequuntur reiciendis, ducimus illo aperiam asperiores voluptatum totam odit eius sunt veniam fuga. Expedita delectus reiciendis quasi repudiandae. Laboriosam explicabo qui non.
           Modi qu iusto corporis hic sunt, cum ad dolorum eveniet! Minus consectetur officia, dicta, animi expedita quibusdam aliquam quos in quis, quas velit? Veritatis, laborum labore?
           Neque ab fugiat vel aut temporibus totam magnam rerum laudantium numquam quas? Optio facilis repellendus cumque dicta sit eius beatae consequatur asperiores velit, a repudiandae illum veniam quam non aliquam?
           Ex in, nesciunt tate perferendis deserunt soluta excepturi recusandae distinctio vel dolorem eveniet quam modi quas neque, doloremque nesciunt delectus magnam obcaecati incidunt. Minus explicabo eligendi omnis.
           Nesciunt debitis distinctio sequi ratione assumenda. Nisi officia quo nostrum inventore provident cum quos iure placeat. Deleniti natus fuga omnis, quo aperiam repellendus, perspiciatis delectus amet unde libero optio numquam!
           Accusamus vitae nostrum iste odio sit corrupti adipisci veritatis quasi animi enim culpa perferendis, similique commodi libero sunt magni, officia earum voluptatum. Quibusdam, minima perferendis voluptatem modi rem sapiente distinctio!
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
    );
  }

  export default TabComponent;