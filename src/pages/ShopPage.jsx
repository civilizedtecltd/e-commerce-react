import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Breadcrumb, Form, Pagination, Card} from 'react-bootstrap';

//Payment Icon Images
import paypalIcon from '../assets/images/paypal_icon_img.png';
import masterCardIcon from '../assets/images/master_card_icon_img.png';
import visaIcon from '../assets/images/visa_icon_img.png';

// Product Images
import bookImage1 from '../assets/images/books/book_img_01.jpg';

const ShopPage = () => {
  return (<>

    <div className="allWrapper">

      <div className="headerTopBar clearfix bgBlack" id="headerTopBar">
        <Container>
          <Row className="justify-content-between">
            <Col>
              <div className="headFeature">
                <i className="fas fa-map-marker-alt"></i> <span>Delivery region: Nairobi</span>
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

            <Col className="col-auto">
              <div className="headFeature">
                <ul className="headFeatureList d-flex justify-content-between">
                  <li><i className="fas fa-truck"></i> <span>Free delivery</span></li>
                  <li><i className="fas fa-award"></i> <span>Genuine goods</span></li>
                  <li><i className="fas fa-headset"></i> <span>Customer support</span></li>
                </ul>{/* end of headFeatureList */}
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of headerTopBar */}

      <header className="header userHeader clearfix" id="header">
        <Container>
          <Row className="align-items-center">
            <Col sm="2">
              <div className="logoWrapper">
                <h1 className="logoText"><Link to="#">LOGO</Link></h1>
              </div>{/* end of logoWrapper */}

            </Col>{/* end of Col */}

            <Col>
              <nav className="mainMenu mainNav" id="mainNav">
                <ul className="navTabs">
                  <li>
                    <Link to="#" className="active">Home</Link>
                  </li>{/* end of li */}
                </ul>{/* end of navTabs */}

              </nav>{/* end of Nav */}
              <Link to="#" className="generalLink" id="responsiveMainNavToggler"><i className="fa fa-bars"></i></Link>
              <div className="clearfix"></div>
              <div className="responsiveMainNav"></div>{/* end of Nav */}
            </Col>{/* end of Col */}

            <Col className="col-auto">
              <div className="headPopBar clearfix" id="headPopBar">
                <ul className="headPopBarList d-flex justify-content-between align-items-center">
                  <li><Link to="/"><i className="fas fa-search"></i> Search</Link></li>
                  <li><Link to="/"><i className="far fa-star"></i> Favorites</Link></li>
                  <li><Link to="/"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
                  <li><Link to="/"><i className="far fa-user"></i> Login</Link></li>
                </ul>{/* end of headPopBarList */}
              </div>{/* end of headPopBar */}
            </Col>{/* end of Col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </header>{/* end of header */}

      <main className="mainContent clearfix" id="mainContent">

        <section className="sectionBreadcrumb secGap clearfix pb-0" id="sectionBreadcrumb">
          <Container>
            <Row>
              <Col>
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>Favorites</Breadcrumb.Item>
                </Breadcrumb>{/* end of Breadcrumb */}
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}

          </Container>{/* end of Container */}
        </section>{/* end of Breadcrumb */}

        <section className="productsBodyAsidebar clearfix" id="productsBodyAsidebar">
          <Container>
            <Row>
              <Col sm="3">
                <aside className="asideFilterBar secGap clearfix" id="asideFilterBar">
                  <h2 class="asideTitle">Filters</h2>

                  <div class="asideBody bgGray" id="asideBody">

                    <div class="singleFilterCard">
                      <h5>Stage</h5>
                      <ul class="filterList">
                        <li><Link to="#"> Class 1 <span>6 </span></Link></li>
                        <li><Link to="#"> Class 2 <span>10 </span></Link></li>
                        <li><Link to="#"> Class 3 <span>5</span></Link></li>
                        <li><Link to="#"> Class 4 <span>23 </span></Link></li>
                        <li><Link to="#"> Class 5 <span>100 </span></Link></li>
                        <li><Link to="#"> Class 6 <span>1 </span></Link></li>
                      </ul>{/* end of filterList */}
                    </div>{/* end of singleFilterCard */}
                    
                    <div class="singleFilterCard">
                      <h5>Discipline</h5>
                      <ul class="filterList">
                        <li><Link to="#"> Mathematics activities <span>5</span></Link></li>
                        <li><Link to="#"> Kiswahili activities <span>3</span></Link></li>
                        <li><Link to="#"> Hygiene and nutrition <br />activities <span>10</span></Link></li>
                        <li><Link to="#"> Environmental activities <span>6</span></Link></li>
                        <li><Link to="#"> Religion activities <span>8</span></Link></li>
                        <li><Link to="#"> Language activities <span>15</span></Link></li>
                        <li><Link to="#"> Mathematics <span>10</span></Link></li>
                        <li><Link to="#"> English <span>10</span></Link></li>
                        <li><Link to="#"> Kiswahili <span>3</span></Link></li>
                        <li><Link to="#"> Science <span>10</span></Link></li>
                        <li><Link to="#"> Social Studies <span>5</span></Link></li>
                        <li><Link to="#"> Creire <span>3</span></Link></li>
                      </ul>{/* end of filterList */}
                    </div>{/* end of singleFilterCard */}
                    
                    <div class="singleFilterCard">
                      <h5>Price Range</h5>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control type="range" id="formControlRange" />
                        </Form.Group>{/* end of Form.Group */}

                      </Form>{/* end of Form */}
                    </div>{/* end of singleFilterCard */}

                    <div class="singleFilterCard">
                      <h5>Author</h5>
                      <ul class="filterList">
                        <li><Link to="#"> Sam Smith <span>5</span></Link></li>
                        <li><Link to="#"> Barbara Cartland <span>3</span></Link></li>
                        <li><Link to="#"> William Shakespeare <span>10</span></Link></li>
                        <li><Link to="#"> Georges Simenon <span>6</span></Link></li>
                        <li><Link to="#"> Enid Blyton <span>8</span></Link></li>
                      </ul>{/* end of filterList */}
                    </div>{/* end of singleFilterCard */}

                    <div class="singleFilterCard">
                      <h5>Publishing house</h5>
                      <ul class="filterList">
                        <li><Link to="#"> Lorem ipsum<span>5</span></Link></li>
                        <li><Link to="#"> Dolor set amet <span>3</span></Link></li>
                        <li><Link to="#"> Adipiscing <span>10</span></Link></li>
                      </ul>{/* end of filterList */}
                    </div>{/* end of singleFilterCard */}
                  
                    <div class="singleFilterCard">
                      <h5>Publishing Year</h5>
                      <ul class="filterList">
                        <li><Link to="#"> 2012<span>5</span></Link></li>
                        <li><Link to="#"> 2013 <span>3</span></Link></li>
                        <li><Link to="#"> 2014 <span>10</span></Link></li>
                        <li><Link to="#"> 2015 <span>2</span></Link></li>
                        <li><Link to="#"> 2016 <span>0</span></Link></li>
                        <li><Link to="#"> 2017 <span>15</span></Link></li>
                        <li><Link to="#"> 2018 <span>80</span></Link></li>
                        <li><Link to="#"> 2019 <span>180</span></Link></li>
                      </ul>{/* end of filterList */}
                    </div>{/* end of singleFilterCard */}
                    
                    <div class="singleFilterCard">
                      <h5>Book Cover</h5>
                      <ul class="filterList">
                        <li><Link to="#"> Lorem ipsum<span>5</span></Link></li>
                        <li><Link to="#"> Dolor set amet <span>3</span></Link></li>
                      </ul>{/* end of filterList */}
                    </div>{/* end of singleFilterCard */}
                    
                    <div class="singleFilterCard p-0 border-0 m-0">
                      <h5>Language</h5>
                      <ul class="filterList">
                        <li><Link to="#"> Swahili <span>5</span></Link></li>
                        <li><Link to="#"> English <span>3</span></Link></li>
                      </ul>{/* end of filterList */}
                    </div>{/* end of singleFilterCard */}
                  </div>{/* end of asideBody */}
                </aside>{/* end of asideFilterBar */}
              </Col>{/* end of Col */}

              <Col>
                <div className="allProductContent secGap clearfix" id="allShopProduct">
                  <Row className="mb-5">
                    <Col className="col">
                      <h2 className="pageTitle"><span>Primary</span> school Books</h2>
                    </Col>{/* end of Col */}
                  </Row>{/* end of Row */}

                  <Row className="mb-4">

                    <Col>
                      <div className="singleFilter">
                        <Form>
                          <Form.Group controlId="filterForm.ControlSelect1" className="d-flex align-items-center filterSelect">
                            <Form.Label>Sort By</Form.Label>
                            <Form.Control as="select">
                              <option>Popular</option>
                              <option>New</option>
                              <option>Price: low to high</option>
                              <option>Price: high to low</option>
                            </Form.Control>{/* end of Form.Control */}
                          </Form.Group>{/* end of Form.Group */}
                        
                        </Form>{/* end of Form */}
                      </div>{/* end of singleFilter */}
                    </Col>{/* end of Col */}

                    <Col>
                      <div className="singleFilter">
                        <Form>
                          <Form.Group controlId="filterForm.ControlSelect1" className="d-flex align-items-center filterSelect">
                            <Form.Label>Show</Form.Label>
                            <Form.Control as="select">
                              <option>16</option>
                              <option>10</option>
                              <option>5</option>
                            </Form.Control>{/* end of Form.Control */}
                          </Form.Group>{/* end of Form.Group */}
                        
                        </Form>{/* end of Form */}
                      </div>{/* end of singleFilter */}
                    </Col>{/* end of Col */}

                    <Col>
                      <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{7}</Pagination.Item>
                        <Pagination.Next />
                      </Pagination>{/* end of Pagination */}
                    </Col>{/* end of Col */}

                  </Row>{/* end of Row */}

                  <Row>
                    <Col sm="3">
                      <Card className="productCard border-0 bg-transparent">
                        <div className="productMedia mb-3 bgGray">
                          <img src={bookImage1} alt="" />
                        </div>{/* end of productMedia */}

                        <div className="productContent">
                          <Link to="#"><h4 className="productTitle mb-1">Maths time for class 1</h4></Link> 
                          <h5 className="authorName mb-1">Author name</h5>
                          <p className="productPrice">$ 43.00</p>
                        </div>{/* end of productContent */}
                      </Card>{/* end of productCard */}
                    </Col>{/* end of Container */}
                    
                    <Col sm="3">
                      <Card className="productCard border-0 bg-transparent">
                        <div className="productMedia mb-3 bgGray">
                          <img src={bookImage1} alt="" />
                        </div>{/* end of productMedia */}

                        <div className="productContent">
                          <Link to="#"><h4 className="productTitle mb-1">Maths time for class 1</h4></Link> 
                          <h5 className="authorName mb-1">Author name</h5>
                          <p className="productPrice">$ 43.00</p>
                        </div>{/* end of productContent */}
                      </Card>{/* end of productCard */}
                    </Col>{/* end of Container */}

                    <Col sm="3">
                      <Card className="productCard border-0 bg-transparent">
                        <div className="productMedia mb-3 bgGray">
                          <img src={bookImage1} alt="" />
                        </div>{/* end of productMedia */}

                        <div className="productContent">
                          <Link to="#"><h4 className="productTitle mb-1">Maths time for class 1</h4></Link> 
                          <h5 className="authorName mb-1">Author name</h5>
                          <p className="productPrice">$ 43.00</p>
                        </div>{/* end of productContent */}
                      </Card>{/* end of productCard */}
                    </Col>{/* end of Container */}

                    <Col sm="3">
                      <Card className="productCard border-0 bg-transparent">
                        <div className="productMedia mb-3 bgGray">
                          <img src={bookImage1} alt="" />
                        </div>{/* end of productMedia */}

                        <div className="productContent">
                          <Link to="#"><h4 className="productTitle mb-1">Maths time for class 1</h4></Link> 
                          <h5 className="authorName mb-1">Author name</h5>
                          <p className="productPrice">$ 43.00</p>
                        </div>{/* end of productContent */}
                      </Card>{/* end of productCard */}
                    </Col>{/* end of Container */}

                  </Row>{/* end of Container */}

                </div>{/* end of allProductContent */}
              </Col>{/* end of Col */}

            </Row>{/* end of Row */}

            
            
          </Container>{/* end of Container */}
        </section>{/* end of productsBodyAsidebar */}
      </main>{/* end of mainContent */}

      <footer className="footer clearfix bg-white pt-5 pb-5" id="footer">
        <Container>
          <Row>
            <Col>
              <div className="footerWidget">
                <div className="footerLogo">
                  <div className="logoWrapper">
                    <h1 className="logoText"><Link to="#">LOGO</Link></h1>
                  </div>{/*  end of logoWrapper */}
                </div>{/*  end of footerLogo */}
              </div>{/*  end of footerWidget */}
            </Col> {/*  end of col */}

            <Col sm="5">
              <div className="footerWidget">
                <h4 className="footerWidgetHeader">Information</h4>
                <ul className="footerLinksList">
                  <li><Link to="#">Order status</Link></li>
                  <li><Link to="#">How to place an order</Link></li>
                  <li><Link to="#">Return</Link></li>
                  <li><Link to="#">Terms & Conditions</Link></li>
                  <li><Link to="#">Delivery details</Link></li>
                  <li><Link to="#">Privacy Policy</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="#">Our support center</Link></li>
                </ul>{/*  end of footerLinksList */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

            <Col sm="2">
              <div className="footerWidget">
                <h4 className="footerWidgetHeader">Contact us</h4>
                <ul className="getInTouchList">
                  <li>
                    <Link to="mailto:you@example.com" title="click to mail us">you@example.com</Link>
                  </li>{/*  end of li */}
                  <li>
                    <Link to="tele:1234567890" title="click to call us">+(123) 456 7890</Link>
                  </li>{/*  end of li */}
                  <li>
                    <p>Your long address, city, region, zip code</p>
                  </li>{/*  end of li */}
                </ul>{/*  end of getInTouchList */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

            <Col className="align-self-center">
              <div className="footerWidget">
                <ul className="footerSocial">
                  <li className="facebook"><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li className="facebook"><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  <li className="facebook"><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                </ul>{/*  end of footerSocial */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </footer>{/* end of footer */}

      <div className="footerBottom clearfix pb-3" id="footerBottom">
        <Container>
          <hr className="hrBorder" />
          <Row className="align-items-center justify-content-between">
            <Col>
              <p className="copyrights">© 2019 All Rights Reserved</p>
            </Col>{/* end of Col */}

            <Col sm="3">
              <ul className="paymentsNav d-flex justify-content-between align-items-center">
                <li className="paypal">
                  <Link to="#" title="paypal"><img alt="paypal" src={paypalIcon} title="paypal" /></Link>
                </li>{/* end of li */}
                <li className="visa">
                  <Link href="#" title="visa"><img alt="visa card" src={visaIcon} title="visa card" /></Link>
                </li>{/* end of li */}
                <li className="master">
                  <Link to="#" title="master card"><img alt="master card" src={masterCardIcon} title="master card" /></Link>
                </li>{/* end of li */}
              </ul>{/* end of paymentsNav */}
            </Col>{/* end of Col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of footerBottom */}

    </div>{/* end of allWrapper */}

  </>);
}

export default ShopPage;