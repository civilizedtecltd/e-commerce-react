import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Form, Card } from "react-bootstrap";
import axios from 'axios';

// Product Images
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import PriceRanger from "../components/PriceRangeSlider/PriceRangeSlider";
import {HeaderComponent, MobileHeader} from "../components/header/Header";

import { URL } from '../constants/config';


const ShopPage = () => {

    const [state, setState] = useState([])

    useEffect(() => {

        const fetchBooks = async () => {
          const result = await axios(URL._ALL_BOOKS);
          setState(result.data.data);
        };
        fetchBooks();

      }, []);

  return (
    <>
      <div className="allWrapper">
        <HeaderComponent />
        <MobileHeader />
        <main className="mainContent clearfix" id="mainContent">
          <section
            className="sectionBreadcrumb secGap clearfix pb-0"
            id="sectionBreadcrumb"
          >
            <Container>
              <Row>
                <Col>
                  <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Favorites</Breadcrumb.Item>
                  </Breadcrumb>
                  {/* end of Breadcrumb */}
                </Col>
                {/* end of Col */}
              </Row>
              {/* end of Row */}
            </Container>
            {/* end of Container */}
          </section>
          {/* end of Breadcrumb */}

          <section
            className="productsBodyAsidebar clearfix"
            id="productsBodyAsidebar"
          >
            <Container>
              <Row>
                <Col sm="3">
                  <aside
                    className="asideFilterBar secGap clearfix"
                    id="asideFilterBar"
                  >
                    <h2 className="asideTitle">Filters</h2>

                    <div className="asideBody bgGray" id="asideBody">
                      <div className="singleFilterCard">
                        <h5>Stage</h5>
                        <ul className="filterList">
                          <li>
                            <Link to="#">
                              {" "}
                              Class 1 <span>6 </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Class 2 <span>10 </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Class 3 <span>5</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Class 4 <span>23 </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Class 5 <span>100 </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Class 6 <span>1 </span>
                            </Link>
                          </li>
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard">
                        <h5>Discipline</h5>
                        <ul className="filterList">
                          <li>
                            <Link to="# ">
                              {" "}
                              Mathematics activities <span>5</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Kiswahili activities <span>3</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Hygiene and nutrition <br />
                              activities <span>10</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Environmental activities <span>6</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Religion activities <span>8</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Language activities <span>15</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Mathematics <span>10</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              English <span>10</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Kiswahili <span>3</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Science <span>10</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Social Studies <span>5</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Creire <span>3</span>
                            </Link>
                          </li>
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard">
                        <h5>Price Range</h5>
                        <Form>
                          <PriceRanger />
                        </Form>
                        {/* end of Form */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard">
                        <h5>Author</h5>
                        <ul className="filterList">
                          <li>
                            <Link to="#">
                              {" "}
                              Sam Smith <span>5</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Barbara Cartland <span>3</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              William Shakespeare <span>10</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Georges Simenon <span>6</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Enid Blythe <span>8</span>
                            </Link>
                          </li>
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard">
                        <h5>Publishing house</h5>
                        <ul className="filterList">
                          <li>
                            <Link to="#">
                              {" "}
                              Lorem ipsum<span>5</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Dolor set amet <span>3</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Adipiscing <span>10</span>
                            </Link>
                          </li>
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard">
                        <h5>Publishing Year</h5>
                        <ul className="filterList">
                          <li>
                            <Link to="#">
                              {" "}
                              2012<span>5</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              2013 <span>3</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              2014 <span>10</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              2015 <span>2</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              2016 <span>0</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              2017 <span>15</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              2018 <span>80</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              2019 <span>180</span>
                            </Link>
                          </li>
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard">
                        <h5>Book Cover</h5>
                        <ul className="filterList">
                          <li>
                            <Link to="#">
                              {" "}
                              Lorem ipsum<span>5</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              Dolor set amet <span>3</span>
                            </Link>
                          </li>
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard p-0 border-0 m-0">
                        <h5>Language</h5>
                        <ul className="filterList">
                          <li>
                            <Link to="#">
                              {" "}
                              Swahili <span>5</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              English <span>3</span>
                            </Link>
                          </li>
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}
                    </div>
                    {/* end of asideBody */}
                  </aside>
                  {/* end of asideFilterBar */}
                </Col>
                {/* end of Col */}

                <Col>
                  <div
                    className="allProductContent secGap clearfix"
                    id="allShopProduct"
                  >
                    <Row className="mb-5">
                      <Col className="col">
                        <h2 className="pageTitle">
                          <span>Primary</span> school Books
                        </h2>
                      </Col>
                      {/* end of Col */}
                    </Row>
                    {/* end of Row */}
                    <div className="row mb-4">
                      <div className="col">
                        <ul className="singleFilter d-flex align-items-center">
                          <li>
                            <label htmlFor="">Sort By</label>
                          </li>
                          <li>
                            <select className="filterSelect form-control">
                              <option>Popular</option>
                              <option>New</option>
                              <option>Price: low to high</option>
                              <option>Price: high to low</option>
                            </select>
                          </li>
                        </ul>
                      </div>

                      <div className="col">
                        <ul className="singleFilter d-flex align-items-center">
                          <li>
                            <label htmlFor="">Show</label>
                          </li>

                          <li>
                            <select className="filterSelect form-control">
                              <option>16</option>
                              <option>10</option>
                              <option>5</option>
                            </select>
                          </li>
                        </ul>
                      </div>

                      <div className="col">
                        <nav aria-label="Page navigation">
                          <ul className="pagination align-items-center justify-content-between">
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                <i className="fas fa-chevron-left"></i>
                              </Link>
                            </li>
                            <li className="page-item">Page</li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                1
                              </Link>
                            </li>
                            <li className="page-item">of</li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                7
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                <i className="fas fa-chevron-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>

                    <Row>

                      {state.map((book, index) => {

                          let bookCover = {
                                img1: `${URL.BASE}/images/books/default.png`,
                                img2: `${URL.BASE}/images/books/default.png`,
                                img3: `${URL.BASE}/images/books/default.png`
                            }

                          if(book.cover_images !== null){

                            const cover = JSON.parse(book.cover_images)

                              bookCover = {
                                  img1 : `${URL.BASE}/${cover.img_1}`,
                                  img2 : `${URL.BASE}/${cover.img_2}`,
                                  img3 : `${URL.BASE}/${cover.img_3}`
                              }
                          }

                          return (
                            <Col key = {index} sm="3">
                            <Card className="productCard border-0 bg-transparent">
                              <div className="productMedia mb-3 bgGray">
                                <img src={bookCover.img1} alt="" />
                              </div>
                              {/* end of productMedia */}

                              <div className="productContent">
                                <Link to="/product/">
                                  <h4 className="productTitle mb-1">
                                    {book.name}
                                  </h4>
                                </Link>
                                <h5 className="authorName mb-1">{book.book_author.name}</h5>
                                <p className="productPrice">$ {book.price}</p>
                              </div>
                              {/* end of productContent */}
                            </Card>
                            {/* end of productCard */}
                          </Col>
                          );
                      })}

                    </Row>
                    {/* end of Container */}
                  </div>
                  {/* end of allProductContent */}
                </Col>
                {/* end of Col */}
              </Row>
              {/* end of Row */}
            </Container>
            {/* end of Container */}
          </section>
          {/* end of productsBodyAsidebar */}
          <section
            className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap"
            id="mailSubscribe"
          >
            <Container className="container">
              <NewsLetterComponent />
            </Container>
            {/* end of Container */}
          </section>
          {/* end of mailSubscribe */}
        </main>
        {/* end of mainContent */}
        <FooterComponent />
      </div>
      {/* end of allWrapper */}
    </>
  );
};

export default ShopPage;
