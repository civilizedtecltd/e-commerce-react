import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";
import { fetchAllBook, fetchBooksByCategory,filterByPriceRange,filterShortBy,fetchBooksByFilter} from "../redux/actions/bookActions";
import { fetchStages } from "../redux/actions/filterAction";
import Filters from "../components/shop/FiltersComponents";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import HeaderComponent from "../components/header/Header";
import MobileHeader from "../components/header/MobileHeader";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import "./assets/shop.css";
import PageLoader from "../components/pageLoader/PageLoaderComponent";


const useStyle = createUseStyles({page_field: {width: "50px",marginRight: "5px",marginLeft: "5px"}});

const ShopPage = props => {
  const classes = useStyle();
  const { id, title, showItem, pageNumber, keyword, filter_type, filter_id } = useParams();
  const { stageList, filterShortByType, fetchBooks, filterByPrice, getBooksByFilter, booksByCategory, book: { totalPage, data, pending} } = props
  const [priceFilter, setPriceFilter] = useState({higherPrice:null,lowerPrice:null})
  const [pagination, setPagination] = useState({ show: 5, page: 1 })
  let [sortBy, setSortBy] = useState("");
  const totalItem = props.cart.length;
  const favoriteItem = props.favorite.items;
  const shopUrl = window.location.pathname;


  useEffect(() => {
    const { show, page } = pagination
    const { higherPrice, lowerPrice } = priceFilter;
       stageList(id);
    if (page && show && sortBy) {
      return filterShortByType(page, show, sortBy);
    } else if (shopUrl === "/shopping") {
      return fetchBooks(page, show, null);
    }else if (page && show && lowerPrice && higherPrice && filter_type && filter_id) {
      return filterByPrice(page, show, lowerPrice, higherPrice,filter_type, filter_id);
    }else if (page && show && filter_type && filter_id) {
      return getBooksByFilter(page, show, filter_type, filter_id);
    } else if (page && show && lowerPrice && higherPrice) {
      return filterByPrice(page, show, lowerPrice, higherPrice);
    } else if (id === "all" && pageNumber && showItem && keyword) {
      return fetchBooks(page, show, keyword);
    } else if (!isNaN(id) && id && title && page && show) {
      return booksByCategory(id, page, show);
    }
  }, [sortBy, priceFilter, id, filter_type, filter_id, pagination, stageList, shopUrl, pageNumber, showItem,
      keyword, filterShortByType, fetchBooks, filterByPrice, getBooksByFilter, booksByCategory, title]);

  const PriceRange = (minPrice, maxPrice) => setPriceFilter({higherPrice:maxPrice,lowerPrice:minPrice})

  const handleShowBook = e => setPagination({...pagination, show:e.target.value});

  const handleNext = () => (pagination.page <= totalPage) ? setPagination({ ...pagination, page: pagination.page + 1 }) : pagination;

  const handlePreviews =()=> (pagination.page !== 1 || pagination > 0) ? setPagination({ ...pagination, page: pagination.page - 1 }) : pagination;

  const handleSortBy = e => setSortBy(e.target.value);


  return (
    <>
      <PageLoader loading={pending} />
      <div className="allWrapper">
        <HeaderComponent
          favorite_item={favoriteItem.length}
          cartItem={totalItem}
        />
        <MobileHeader
          favorite_item={favoriteItem.length}
          cartItem={totalItem}
        />
        <main className="mainContent clearfix" id="mainContent">
          <section
            className="sectionBreadcrumb secGap clearfix pb-0"
            id="sectionBreadcrumb"
          >
            <Container>
              <Row>
                <Col>
                  <BreadCrumb />
                </Col>
              </Row>
            </Container>
          </section>

          <section
            className="productsBodyAsidebar clearfix"
            id="productsBodyAsidebar"
          >
            <Container>
              <Row>
                <Col sm="3">
                  <Filters callback={PriceRange} />
                </Col>

                <Col>
                  <div
                    className="allProductContent secGap clearfix"
                    id="allShopProduct"
                  >
                    <Row className="mb-5">
                      <Col className="col">
                        <h2 className="pageTitle">
                          <span>{title}</span> Books
                        </h2>
                      </Col>
                    </Row>
                    { data && data.length === 0 ? (
                      <h1 className="text-center">Sorry, No Result Found :(</h1>
                    ) : (
                      <>
                        <Row className="Pagination-Row mb-5">
                          <div className="col">
                            <ul className="singleFilter d-flex align-items-center">
                              <li>
                                <label htmlFor="">Sort By</label>
                              </li>
                              <li>
                                <select
                                  className="filterSelect form-control"
                                  value={sortBy}
                                  onChange={handleSortBy}
                                >
                                  <option value="">select</option>
                                  <option value="Popular">Popular</option>
                                  <option value="New">New</option>
                                  <option value="Price: low to high">
                                    Price: low to high
                                  </option>
                                  <option value="Price: high to low">
                                    Price: high to low
                                  </option>
                                </select>
                              </li>
                            </ul>
                          </div>

                          <div className="col">
                            <ul className="singleFilter d-flex align-items-center">
                              <li>
                                <label>Show</label>
                              </li>

                              <li>
                                <select
                                  name="up-filter-select"
                                  className="filterSelect form-control"
                                  value={pagination.show}
                                  onChange={handleShowBook}
                                >
                                  <option value="16">16</option>
                                  <option value="10">10</option>
                                  <option value="5">5</option>
                                </select>
                              </li>
                            </ul>
                          </div>

                          <div className="col">
                            <nav aria-label="Page navigation">
                              <ul className="pagination align-items-center justify-content-between">
                                <li className={`page-item ${classes.page_field}`} onClick={handlePreviews} >
                                  <button className="page-link">
                                    <i className="fas fa-chevron-left"></i>
                                  </button>
                                </li>
                                <li className={`page-item ${classes.page_field}`}>Page</li>
                                <li className={`page-item ${classes.page_field}`}>
                                  <input type="text" className="page-link"  value={pagination.page} readOnly />
                                </li>
                                <li className="page-item">of</li>
                                <li className={`page-item ${classes.page_field}`}>
                                  <input type="text" value={totalPage} className="page-link" readOnly/>
                                </li>
                                <li className="page-item" onClick={handleNext}>
                                  <button className="page-link">
                                     <i className="fas fa-chevron-right"></i>
                                  </button>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </Row>

                        <Row className="Product_Row">
                          {data && data.length === 0 ? (
                            <></>
                          ) : (
                            data && data.map((book, index) => {
                              return (
                                <Col key={index} sm="3 mb-5">
                                  <LazyLoad once={true} height={200}>
                                    <Card className="productCard border-0 bg-transparent">
                                      <div className="productMedia mb-3 bgGray">
                                        <Link to={`/product/${book.id}`}>
                                          <img
                                            src={
                                              book.cover_images !== null
                                                ? `${book.cover_images.img_1}`
                                                : ""
                                            }
                                            alt=""
                                          />
                                        </Link>
                                      </div>

                                      <div className="productContent">
                                        <Link to={`/product/${book.id}`}>
                                          <h4 className="productTitle limit-character">
                                            {book.name}
                                          </h4>
                                        </Link>
                                        <h5 className="authorName">
                                          {book.book_author.name}
                                        </h5>
                                        <p className="productPrice">
                                          Ksh {book.price}
                                        </p>
                                      </div>
                                    </Card>
                                  </LazyLoad>
                                </Col>
                              );
                            })
                          )}
                        </Row>

                        <Row className="Pagination-Row mt-5">
                          <div className="col">
                            <ul className="singleFilter d-flex align-items-center">
                              <li>
                                <label htmlFor="">Sort By</label>
                              </li>
                              <li>
                                <select
                                  className="filterSelect form-control"
                                  value={sortBy}
                                  onChange={handleSortBy}
                                >
                                  <option value="">select</option>
                                  <option value="Popular">Popular</option>
                                  <option value="New">New</option>
                                  <option value="Price: low to high">
                                    Price: low to high
                                  </option>
                                  <option value="Price: high to low">
                                    Price: high to low
                                  </option>
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
                                <select
                                  name="up-filter-select"
                                  className="filterSelect form-control"
                                  value={pagination.show}
                                  onChange={handleShowBook}
                                >
                                  <option value="16">16</option>
                                  <option value="10">10</option>
                                  <option value="5">5</option>
                                </select>
                              </li>
                            </ul>
                          </div>

                          <div className="col">
                            <nav aria-label="Page navigation">
                              <ul className="pagination align-items-center justify-content-between">
                                <li className="page-item" onClick={handlePreviews}>
                                  <button className="page-link">
                                    <i className="fas fa-chevron-left"></i>
                                  </button>
                                </li>
                                <li className={`page-item ${classes.page_field}`}>Page</li>
                                <li className={`page-item ${classes.page_field}`} >
                                  <input type="text" className="page-link" value={pagination.page} readOnly/>
                                </li>
                                <li className="page-item">of</li>
                                <li className={`page-item ${classes.page_field}`}>
                                  <input type="text" value={totalPage} className="page-link" readOnly/>
                                </li>
                                <li className="page-item" onClick={handleNext}>
                                  <button className="page-link">
                                    <i className="fas fa-chevron-right"></i>
                                  </button>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </Row>
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap" id="mailSubscribe">
            <Container className="container">
              <NewsLetterComponent />
            </Container>
          </section>
        </main>
        <FooterComponent />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const initItem = state.book.total !== undefined ? state.book.total : 1;
  const initShowItem = state.book.show !== undefined ? state.book.show : 5;
  return {
    book: state.book ? state.book : [],
    cart: state.shop.cart,
    totalItem: initItem,
    showItem: initShowItem,
    favorite: state.favorite,
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchBooks: (page, show) => dispatch(fetchAllBook(page, show)),
      booksByCategory: (id, page, show) =>dispatch(fetchBooksByCategory(id, page, show)),
      filterByPrice: (page, show, lowPrice, highestPrice,type,type_id) =>dispatch(filterByPriceRange(page, show, lowPrice, highestPrice,type,type_id)),
      filterShortByType: (page, show, query) =>dispatch(filterShortBy(page, show, query)),
      stageList: category_id => dispatch(fetchStages(category_id)),
      getBooksByFilter: (page, show, filterType, filterId) =>dispatch(fetchBooksByFilter(page, show, filterType, filterId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
