import React from 'react';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import HeaderComponent from '../components/header/Header';

function ProductPage() {
    return(<>
    <div class="allWrapper">
    <HeaderComponent/>
<main class="mainContent clearfix" id="mainContent">

  <section class="breadcrumbArea secGap pb-0 clearfix" id="breadcrumb">
    <div class="container">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Primary school </a></li>
              <li class="breadcrumb-item"><a href="#">Shop </a></li>
              <li class="breadcrumb-item active" aria-current="page">Product Page</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>

  <section class="mainBodyContent productDetails secGap clearfix" id="mainBodyContent">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="row productImageGallery">
            <div class="col-sm-3">
              <div class="productGallery">
                <div class="singleItem bgGray p-2 mb-2">
                  <img src="assets/images/product_big_img_01.jpg" alt=""/>
                </div>
                
                <div class="singleItem bgGray p-2 mb-2">
                  <img src="assets/images/product_big_img_01.jpg" alt=""/>
                </div>

                <div class="singleItem bgGray p-2">
                  <img src="assets/images/product_big_img_01.jpg" alt=""/>
                </div>

              </div>
            </div>

            <div class="col-sm-9">
              <div class="productSingleView bgGray p-3 text-center">
                <img src="assets/images/product_big_img_01.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card productCardDetails border-0">
            <div class="card-header border-0 bg-white">
              <div class="productCardHead">
                <h2 class="productSingleTitle">Math time class - 2</h2>
                <ul class="productReviewStar">
                  <li class="5star"><i class="fas fa-star"></i></li>
                  <li class="5star"><i class="fas fa-star"></i></li>
                  <li class="5star"><i class="fas fa-star"></i></li>
                  <li class="5star"><i class="fas fa-star"></i></li>
                  <li class="star"><i class="fas fa-star"></i></li>
                </ul>
                <p>(7 reviews)</p>
              </div>
              <h6 class="authName">by <a href="#">Sam Smith</a></h6>
            </div>

            <div class="card-body productCardBody">
              <h5 class="productsinglePrice mb-4">$ 16.99 <span class="productAvaility">Available</span></h5>
              <div class="productSortDes">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    enim ipsam voluptatem quia voluptas quia non numquam eius. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum.</p>
              </div>

              <div class="productBtnGroup mt-4 clearfix">
                <div class="row no-gutters">
                  <div class="col-sm-2">
                    <input class="form-control inputValue" type="number" value="1"/>
                  </div>

                  <div class="col text-center">
                    <a href="#"  class="btn linkBtn" data-target="#productCartModal" data-toggle="modal"><i class="fas fa-shopping-cart"></i> Add to cart</a>
                  </div>

                  <div class="col text-center">
                    <a href="#" class="btn linkBtnBorder"><i class="far fa-star"></i> Add to favorites</a>
                  </div>
                </div>
                <hr class="hrBorder mt-4" />
              </div>

              <div class="productDetailsNavTabs mt-3 clearfix">
                <ul class="nav nav-pills productNavTabs mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="pills-description-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-description" aria-selected="true">Description</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="pills-specifications-tab" data-toggle="pill" href="#pills-specifications" role="tab" aria-controls="pills-specifications" aria-selected="false">Specifications</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="pills-reviews-tab" data-toggle="pill" href="#pills-reviews" role="tab" aria-controls="pills-reviews" aria-selected="false">Reviews (7)</a>
                  </li>
                </ul>

                <div class="tab-content productTabContent" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                    <div class="productDes">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        temporenim ipsam voluptatem quia voluptas quia non numquam eius. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum.  Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        temporenim ipsam voluptatem quia voluptas quia non numquam eius. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum.  Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        temporenim ipsam voluptatem quia voluptas quia non numquam eius. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum.  Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="pills-specifications" role="tabpanel" aria-labelledby="pills-specifications-tab">
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

                  </div>
                  <div class="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab">
                    <div class="productReviews clearfix">
                      
                      <div class="card singleReview border-0">
                        <div class="row no-gutters">
                          <div class="col-auto">
                            <div class="reviewUserAvater">
                              <img src="assets/images/reviews_avater.jpg" alt=""/>
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
                              <img src="assets/images/reviews_avater.jpg" alt=""/>
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
                              <img src="assets/images/reviews_avater.jpg" alt=""/>
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

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="similarBooks productView secGap clearfix secBorder" id="similarBooks">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h2 class="sectionTitle mb-5"><span>Similar</span> Book</h2>
        </div>
      </div>

      <div class="row">

        <div class="col-auto">
          <div class="card productCard border-0 bg-transprant">
            <div class="productMedia mb-3 bgGray">
              <img src="assets/images/books/book_img_01.jpg" alt="" />
            </div>
            <div class="productContent">
              <h4 class="productTitle mb-1">Maths time for class 1</h4>
              <h5 class="authorName mb-1">Author name</h5>
              <p class="productPrice">$ 43.00</p>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <div class="card productCard border-0 bg-transprant">
            <div class="productMedia mb-3 bgGray">
              <img src="assets/images/books/book_img_01.jpg" alt="" />
            </div>
            <div class="productContent">
              <h4 class="productTitle mb-1">Maths time for class 1</h4>
              <h5 class="authorName mb-1">Author name</h5>
              <p class="productPrice">$ 43.00</p>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <div class="card productCard border-0 bg-transprant">
            <div class="productMedia mb-3 bgGray">
              <img src="assets/images/books/book_img_01.jpg" alt="" />
            </div>
            <div class="productContent">
              <h4 class="productTitle mb-1">Maths time for class 1</h4>
              <h5 class="authorName mb-1">Author name</h5>
              <p class="productPrice">$ 43.00</p>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <div class="card productCard border-0 bg-transprant">
            <div class="productMedia mb-3 bgGray">
              <img src="assets/images/books/book_img_01.jpg" alt="" />
            </div>
            <div class="productContent">
              <h4 class="productTitle mb-1">Maths time for class 1</h4>
              <h5 class="authorName mb-1">Author name</h5>
              <p class="productPrice">$ 43.00</p>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <div class="card productCard border-0 bg-transprant">
            <div class="productMedia mb-3 bgGray">
              <img src="assets/images/books/book_img_01.jpg" alt="" />
            </div>
            <div class="productContent">
              <h4 class="productTitle mb-1">Maths time for class 1</h4>
              <h5 class="authorName mb-1">Author name</h5>
              <p class="productPrice">$ 43.00</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  
    
</main>

<section class="mailSubscribe clearfix bgImage bgImg01 secGap" id="mailSubscribe">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-10">
        <div class="card subscribeCard border-0 rounded-0">
          <div class="card-body text-center pt-5 pb-5">
            <h1>Subscribe to our newsletter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> enim ipsam voluptatem quia voluptas quia non numquam eius</p>
            
            <form class="d-flex subscribeForm justify-content-center mt-3">

              <div class="form-group mb-2">
                <input type="text" class="form-control" id="email" value="Email"/>
              </div>

              <button type="submit" class="btn btn-primary mb-2">Subscribe</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<FooterComponent/>

</div>

<div class="modal fade peoductAddCartModal" id="productCartModal" tabindex="-1" role="dialog" aria-labelledby="cartModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
    <div class="modal-header border-0">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body border-0 text-center">
      <h2>Product added to cart successfully!</h2>
    </div>

    <div class="modal-footer border-0">
      <button type="button" class="btn btn-primary">Go to checkout</button>
      <button type="button" class="btn linkBtnBorder">Continue shoping</button>
    </div>
    </div>
    </div>
</div>
</>)
}

export default ProductPage;