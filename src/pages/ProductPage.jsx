import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { showSingleBook } from '../redux/actions/bookActions';
import {
  addToCart,
  updateQuantity,
  deliveryMethod,
} from '../redux/actions/shopActions';
import { addToFavorite, removeFavItem } from '../redux/actions/favoriteActions';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import { NewsLetterComponent } from '../components/offerPageComponents/NewsLetterComponent';
import ImgSlick from '../components/offerPageComponents/ImgSlickComponent';
import { ImageCarousel } from '../components/ProductImgCarosellComponents/ProductImgCarosell';
import HeaderComponent from '../components/header/Header';
import MobileHeader from '../components/header/MobileHeader';
import TabComponent from '../components/TabComponent/TabComponent';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import checkAuth from '../helpers/checkAuth';
import TotalRating from '../components/ratingComponent/TotalRating';
import PageLoader from '../components/pageLoader/PageLoaderComponent';
import '../pages/assets/product.css';
import '../assets/css/theme.css';
import styled from 'styled-components';

//react icons
import { GiCommercialAirplane } from 'react-icons/gi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import { BiBookBookmark } from 'react-icons/bi';
import { GiSpeaker } from 'react-icons/gi';
import { FaFilePdf } from 'react-icons/fa';
import { SiPublons } from 'react-icons/si';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import Buttons from '../components/Product-page-buttons/Buttons';
import ForYou from '../components/forYouComponents/ForYou';
import { ProgressBar } from 'react-bootstrap';
const useStyles = createUseStyles({
  addFevButton: {
    color: 'skyblue',
    backgroundColor: 'white',
  },
});

function ProductPage(props) {
  const {
    showSingleBook,
    getDeliveryMethods,
    book,
    cart,
    favorite,
    totalItems,
    similar,
    pending,
    history,
    updateItem,
    addToCart,
    addToFavorite,
    removeFavorite,
  } = props;

  const classes = useStyles();
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    showSingleBook(id);
    getDeliveryMethods();
  }, [id, getDeliveryMethods, showSingleBook]);

  let itemQty = quantity;

  const handleClose = () => setShow(false);
  cart.map((item) => {
    if (item.id === Number(id)) {
      return (itemQty = Number(item.quantity));
    }
  });

  const favoriteItem = favorite.items;
  const isFavoriteItem = favoriteItem.find((fav) => fav.id === Number(id));

  const updateItemQty = (e) => {
    //let countQty = quantity
    setQuantity(Number(e.target.value));
    updateItem({ id: Number(book.id), qty: Number(e.target.value) });
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!checkAuth()) return (window.location = '/login');
    book.quantity = quantity;
    addToCart(book);
    setShow(true);
    if (favoriteItem.length !== 0) {
      favoriteItem.map((item) =>
        item.id === book.id ? removeFavorite(book.id) : ''
      );
    }
  };

  const handleAddFavorite = (e) => {
    e.preventDefault();
    if (!checkAuth()) {
      return history.push('/login');
    } else if (isFavoriteItem) {
      return removeFavorite(id);
    } else if (!isFavoriteItem) {
      addToFavorite(id);
    }
  };

  //cart item number
  const [readmore, setReadmore] = useState(false);
  const info =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit exercitationem, minima eos voluptas ex inventore sit provident veritatis reiciendis magni officia assumenda quasi, aliquam cupiditate quaerat nisi laborum! Suscipit, quam dolorum. Odio, fugiat! Explicabo neque illum eveniet odio veniam voluptatibus optio nesciunt placeat, iusto dolor tempore labore aliquid! Repudiandae, ipsa? assumenda quasi, aliquam cupiditate quaerat nisi laborum! Suscipit, quam dolorum. Odio, fugiat! Explicabo neque illum eveniet odio veniam voluptatibus optio nesciunt placeat, iusto dolor tempore labore aliquid! Repudiandae, ipsa?';

  const buttonData = [
    {
      text: 'abailable',
      name: 'hardcover',
      icon: <BiBookBookmark />,
      price: '$16.99',
    },
    {
      text: 'abailable',
      name: 'audio book',
      icon: <GiSpeaker />,
      price: '$16.99',
    },
    {
      text: 'out of stock',
      name: 'e pub',
      icon: <SiPublons />,
      price: '$16.99',
    },
    {
      text: 'abailable',
      name: 'pdf',
      icon: <FaFilePdf />,
      price: '$16.99',
    },
  ];

  const productData = [
    {
      title: 'format',
      desc: 'Hardback | 360 pages',
    },
    {
      title: 'format',
      desc: 'Hardback | 360 pages',
    },
    {
      title: 'format',
      desc: 'Hardback | 360 pages',
    },
    {
      title: 'format',
      desc: 'Hardback | 360 pages',
    },
    {
      title: 'format',
      desc: 'Hardback | 360 pages',
    },
    {
      title: 'format',
      desc: 'Hardback | 360 pages',
    },
    {
      title: 'format',
      desc: 'Hardback | 360 pages',
    },
    {
      title: 'format',
      desc: 'Hardback | 360 pages',
    },
    {
      title: 'format',
      desc: 'Hardback | 360 pages',
    },
    {
      title: 'format',
      desc: 'Hardback | 360 pages',
    },
  ];

  return (
    <>
      <PageLoader loading={pending && pending} />
      <div className='allWrapper'>
        <HeaderComponent
          favorite_item={favoriteItem.length}
          cartItem={totalItems && totalItems}
        />
        <MobileHeader
          favorite_item={favoriteItem.length}
          cartItem={totalItems && totalItems}
        />
        <main className='mainContent clearfix' id='mainContent'>
          <section
            className='breadcrumbArea secGap pb-0 clearfix'
            id='breadcrumb'
          >
            <Container>
              <Row>
                <Col>
                  <BreadCrumb />
                </Col>
              </Row>
            </Container>
          </section>

          {/* <section
            className='mainBodyContent productDetails secGap clearfix'
            id='mainBodyContent'
          >
            <div className='container'>
              <div className='row'>
                <div className='col-sm-6'>
                  <ImageCarousel images={book && book.cover_images} />
                </div>

                <div className='col-sm-6'>
                  <div className='card productCardDetails border-0'>
                    <div className='card-header border-0 pr-0 bg-white'>
                      <div className='productCardHead'>
                        <div className='Product-title-product-page mr-4'>
                          <p className='productSingleTitle'>
                            {book ? book.name : ``}
                          </p>
                        </div>
                        <div className='d-flex text-right'>
                          <TotalRating value={book && book.rating} />
                          <div style={{ marginTop: '-3px' }}>
                            <p>
                              {'\u00A0'} {'\u00A0'}{' '}
                              {`(${book && book.total_review} reviews) `}{' '}
                            </p>
                          </div>
                        </div>
                      </div>

                      <h6 className='authName'>
                        by <span>{book && book.book_author.name} </span>
                      </h6>
                    </div>

                    <div className='card-body productCardBody'>
                      <h5 className='product-single-Price mb-4'>
                        Ksh {book ? book.price : 0}
                        <span className='productAvailability'>
                          {book
                            ? book.status === 1
                              ? `Available`
                              : `Unavailable`
                            : ``}
                        </span>
                      </h5>
                      <div className='productSortDes'>
                        <p>{book ? book.short_description : ``}</p>
                      </div>

                      <div className='productBtnGroup mt-4 clearfix'>
                        <div className='row no-gutters'>
                          <div className='col-sm-2'>
                            <input
                              className='form-control inputValue'
                              type='number'
                              value={itemQty}
                              onChange={updateItemQty}
                              min={1}
                            />
                          </div>

                          <div className='col text-center'>
                            <Button
                              className='btn linkBtn'
                              onClick={handleAddToCart}
                            >
                              <i className='fas fa-shopping-cart'></i> Add to
                              Cart
                            </Button>
                          </div>

                          <div className='col text-center'>
                            <Button
                              className={`btn ${classes.addFevButton} ${
                                isFavoriteItem !== undefined
                                  ? 'favorite-btn'
                                  : 'linkBtnBorder'
                              }`}
                              onClick={handleAddFavorite}
                            >
                              <i className='fas fa-star'></i>
                              {isFavoriteItem !== undefined
                                ? 'Remove favorite'
                                : 'Add to favorites'}
                            </Button>
                          </div>
                        </div>
                        <hr className='hrBorder mt-4' />
                      </div>
                      <TabComponent
                        routeHistory={history}
                        description={book ? book.long_description : ``}
                        specification={
                          book
                            ? [
                                {
                                  id: book.id,
                                  author: book.book_author.name,
                                  discipline: book.book_discipline.name,
                                  stage: book.book_stage.stage,
                                  publisher: book.book_publisher.name,
                                  publishing_year:
                                    book.book_publishing_year.name,
                                  language: book.book_language.name,
                                  page_number: book.page_number,
                                },
                              ]
                            : {}
                        }
                        reviews={
                          book && book.book_review ? book.book_review : []
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section
            className='similarBooks SimilarBookSlider productView secGap clearfix secBorder'
            id='similarBooks'
          >
            <Container>
              <div className='row'>
                <div className='col text-center'>
                  <h2 className='sectionTitle mb-5'>
                    <span>Similar</span> Book
                  </h2>
                </div>
              </div>
              <ImgSlick images={similar ? similar : []} />
            </Container>
          </section> */}

          <Wrapper>
            <div className='row'>
              <div className='col-lg-7 col-md-6 col-sm-12 '>
                <div className='row left'>
                  <div className='col-lg-4'>
                    <div className='img-container'>
                      <img
                        src='https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2414/9780241437537.jpg'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='col-lg-8'>
                    <div className='book-description'>
                      <h3>Musicals : The Definitive Illustrated Story</h3>
                      <hr />
                      <div className='rating'>
                        <p>4.04 (119 ratings by Goodreads)</p>
                      </div>
                      <p className='s'>Hardback | English</p>
                      <p className='author'>
                        By (author) DK , Foreword by Elaine Paige
                      </p>
                      <div className='social'>
                        <p>Share</p>
                        <a href='#'>
                          {' '}
                          <AiOutlineMail className='social-icon' />
                        </a>
                        <a href='#'>
                          <FaFacebookF className='social-icon' />
                        </a>
                        <a href='#'>
                          {' '}
                          <AiOutlineTwitter className='social-icon' />
                        </a>
                        <a href='#'>
                          <FaPinterestP className='social-icon' />
                        </a>
                      </div>
                      <div className='desc'>
                        <p>
                          {readmore ? info : `${info.substring(0, 400)}...`}
                          <p
                            className='readmore'
                            onClick={() => setReadmore(!readmore)}
                          >
                            {readmore ? `show less` : `read more`}
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 col-md-6 col-sm-12 '>
                <div className='right'>
                  <div className='price'>
                    <h2>US$71.59</h2>
                    <hr />
                  </div>
                  <div className='desc'>
                    <h5>
                      <GiCommercialAirplane />
                      Free delivery worldwide
                    </h5>
                    <h5>
                      <AiOutlineCheckCircle />
                      Available. Dispatched from the UK in 2 business days
                    </h5>
                    <p>
                      <a href=''>When will my order arrive?</a>
                      <hr />
                    </p>
                  </div>
                  <div className='btn-container'>
                    {buttonData.map((item, index) => {
                      return <Buttons key={index} {...item} />;
                    })}
                  </div>
                  <div className='btn-container'>
                    <input
                      placeholder='1'
                      type='number'
                      className='input-btn'
                    />

                    <button className='cart-btn btn'>
                      <FiShoppingCart /> add to cart
                    </button>
                    <button className='fab-btn btn'>
                      <AiOutlineStar /> add to fabourites
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products details  */}

            <div className='section'>
              <h3>Products Details</h3>
              <hr />
              <div className='row'>
                <div className='col-md-3 col-sm-12'>
                  {productData.slice(0, 6).map((item, index) => {
                    return (
                      <p key={index}>
                        <span>{item.title} : </span> {item.desc}
                      </p>
                    );
                  })}
                </div>
                <div className='col-md-3 col-sm-12'>
                  {productData.slice(6, 12).map((item, index) => {
                    return (
                      <p key={index}>
                        <span>{item.title} : </span> {item.desc}
                      </p>
                    );
                  })}
                </div>
                <div className='col-md-3 col-sm-12'></div>
                <div className='col-md-3 col-sm-12'></div>
              </div>
            </div>
          </Wrapper>
          {/* For you components */}
          <section>
            <ForYou />
            <ForYou />
            <ForYou />
          </section>

          <Wrapper>
            <div className='section'>
              <h3>About DK</h3>
              <hr />
              <p>
                Written by a team of writers with a foreword by a star of many
                musicals, Elaine Paige.
              </p>
            </div>
          </Wrapper>
        </main>

        <section
          className='mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap'
          id='mailSubscribe'
        >
          <Container className='container'>
            <NewsLetterComponent />
          </Container>
        </section>
        <FooterComponent />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className={'border-0'} closeButton></Modal.Header>
        <Modal.Body>
          <h2 className={'text-center'}>Product added to cart successfully!</h2>
        </Modal.Body>
        <Modal.Footer
          className={'border-0 modal-footer-mobile modal-footer-alignment'}
        >
          <div className='modalBottomAlignment'>
            <Link
              to='/checkout'
              className='btn btn-primary mobile-view-btn'
              style={{ color: 'white' }}
            >
              {' '}
              Go to checkout{' '}
            </Link>
            <Link
              to='/shopping'
              className='btn btn-outline linkBtnBorder mobile-view-btn'
              style={{ color: 'white !important' }}
            >
              {' '}
              Continue shopping
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    book: state.book.info,
    similar: state.book.similar,
    pending: state.book.pending ? state.book.pending : false,
    cart: state.shop.cart,
    totalItems: state.shop.cart.length,
    favorite: state.favorite,
    rating: state.book.info,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSingleBook: (id) => dispatch(showSingleBook(id)),
    addToCart: (favorite, book) => dispatch(addToCart(favorite, book)),
    updateItem: ({ id, qty }) => dispatch(updateQuantity({ id, qty })),
    addToFavorite: (id) => dispatch(addToFavorite(id)),
    removeFavorite: (id) => dispatch(removeFavItem(id)),
    getDeliveryMethods: () => dispatch(deliveryMethod()),
  };
};

const Wrapper = styled.section`
  background-color: #f1f1f1;
  padding: 1rem;
  p {
    font-size: 16px;
  }
  .left {
    padding: 0.5rem;
    background: #fff;
    min-height: 410px;
    margin: 0rem;
  }

  .img-container {
    height: 400px;
    width: 115%;
    @media (max-width: 800px) {
      width: 103%;
    }
  }
  .book-description {
    margin-right: 0;
    margin-left: 0.3rem;
  }
  @media (max-width: 800px) {
    .book-description {
      margin-top: 1rem;
    }
  }
  .readmore {
    cursor: pointer;
    color: blue;
    display: inline;
    padding-left: 0.5rem;
  }
  .img-container img {
    height: 100%;
    width: 100%;
    margin-left: -15px;
  }
  .social {
    margin: 0.8rem 0;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .social-icon {
    height: 35px;
    width: 35px;
    padding: 10px;
    background-color: #d7d7d7;
    color: #807e7a;
    border-radius: 50%;
    transition: all 0.3s;
  }
  .social-icon:hover {
    color: blue;
  }

  .right {
    padding: 1rem;
    background: #fff;
    @media (max-width: 764px) {
      margin-top: 1rem;
    }
    .price h2 {
      color: #ff0092;
    }
    h5 {
      display: flex;
      gap: 0.6rem;
      margin: 0.5rem 0;
    }
    h5 svg {
      font-size: 30px;
    }
    .btn-container {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        text-transform: capitalize;
      }
      .available {
        color: #222;
        margin-bottom: 0.3rem;
        opacity: 0;
        font-size: 12px;
      }
      .show {
        opacity: 1;
      }

      .btn {
        display: flex;
        align-items: center;
        padding: 0 0.5rem;
        color: #222;
        background-color: transparent;
        border: 1px solid #0b7bc1;
        min-width: 115px;
        transition: all 0.3s ease;
      }
      .btn svg {
        font-size: 20px;
        margin-right: 0.6rem;
        color: blue;
      }
      button span {
        display: flex;
        flex-direction: column;
      }
      .input-btn {
        width: 50px;
      }
      .btn:hover {
        background-color: #0b7bc1;
        color: #fff;
        p {
          color: #fff;
        }
        svg {
          color: #fff;
        }
      }
    }
  }
  .section {
    background-color: #fff;
    padding: 0.5rem 0.8rem;
    margin-top: 0.7rem;
    p {
      text-transform: capitalize;
      margin-bottom: 0.5rem;
    }
    span {
      font-weight: 600;
      text-transform: capitalize;
    }
  }

  section {
    padding: 1rem 0 !important;
  }
`;
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
