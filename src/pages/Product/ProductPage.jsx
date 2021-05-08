import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { showSingleBook } from '../../redux/actions/bookActions';
import {
  addToCart,
  deliveryMethod,
  updateQuantity,
} from '../../redux/actions/shopActions';
import {
  addToFavorite,
  removeFavItem,
} from '../../redux/actions/favoriteActions';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import { NewsLetterComponent } from '../../components/offerPageComponents/NewsLetterComponent';
import HeaderComponent from '../../components/header/Header';
import MobileHeader from '../../components/header/MobileHeader';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import checkAuth from '../../helpers/checkAuth';
import PageLoader from '../../components/pageLoader/PageLoaderComponent';
import '../assets/product.css';
import '../../assets/css/theme.css';
import styled from 'styled-components';

//react icons
import { GiCommercialAirplane, GiSpeaker } from 'react-icons/gi';
import {
  AiOutlineCheckCircle,
  AiOutlineMail,
  AiOutlineStar,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaFacebookF, FaFilePdf, FaPinterestP } from 'react-icons/fa';
import { BiBookBookmark } from 'react-icons/bi';
import { SiPublons } from 'react-icons/si';
import { FiShoppingCart } from 'react-icons/fi';
import Buttons from '../../components/Product-page-buttons/Buttons';
import ForYou from '../../components/forYouComponents/ForYou';
//image slider react
import ReactImageCarosule from '../../components/ReactImageCarosule';
import TotalRating from '../../components/ratingComponent/TotalRating';
import { useStyles } from './styled';
import TabComponent from '../../components/TabComponent/TabComponent';
import TopDiscountProduct from '../../components/DifferentProduct/TopDiscountProducts';
import TopSaleProducts from '../../components/DifferentProduct/TopSaleProducts';
import RecentSaleProducts from '../../components/DifferentProduct/RecentSaleProducts';
import ReviewProduct from './shared/ReviewProduct';

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

  //   ==================================
  const [message, setMessage] = useState({
    pdf: false,
    hardCover: false,
    ePub: false,
    audio: false,
  });

  useEffect(() => {
    if (message.pdf) {
      document.getElementById('bookPrice').innerHTML = `ksh ${
        (book && book.price_pdf) || '0'
      }`;
    }
    if (message.hardCover) {
      document.getElementById('bookPrice').innerHTML = `ksh ${
        (book && book.price_hardcover) || '0'
      }`;
    }
    if (message.ePub) {
      document.getElementById('bookPrice').innerHTML = `ksh ${
        (book && book.price_epub) || '0'
      }`;
    }
    if (message.audio) {
      document.getElementById('bookPrice').innerHTML = `ksh ${
        (book && book.price_audio) || '0'
      }`;
    }
  }, [message]);
  console.log(message);

  //   ====================
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

  const [bookPriceBtn, setBookPriceBtn] = useState([
    {
      text: 'not available',
      name: 'hard cover',
      icon: <BiBookBookmark />,
      price: '',
    },
    {
      text: 'not available',
      name: 'audio book',
      icon: <GiSpeaker />,
      price: '',
    },
    {
      text: 'not available',
      name: 'e pub',
      icon: <SiPublons />,
      price: '',
    },
    {
      text: 'not available',
      name: 'pdf',
      icon: <FaFilePdf />,
      price: '',
    },
  ]);

  useEffect(() => {
    if (book && book.price_hardcover) {
      setBookPriceBtn([
        ...bookPriceBtn,
        {
          text: book.stock && 'Available',
          name: 'hard cover',
          icon: <BiBookBookmark />,
          price: book.price_hardcover,
        },
      ]);
    }
    if (book && book.price_audiobook) {
      setBookPriceBtn([
        ...bookPriceBtn,
        {
          text: book.book_files.audiobook_file && 'Available',
          name: 'audio book',
          icon: <GiSpeaker />,
          price: book.price_hardcover,
        },
      ]);
    }
    if (book && book.price_epub) {
      setBookPriceBtn([
        ...bookPriceBtn,
        {
          text: book.book_files.epub_file && 'Available',
          name: 'e pub',
          icon: <SiPublons />,
          price: book.price_epub,
        },
      ]);
    }
    if (book && book.price_pdf) {
      setBookPriceBtn([
        ...bookPriceBtn,
        {
          text: book.book_files.pdf_file && 'Available',
          name: 'pdf',
          icon: <FaFilePdf />,
          price: book.price_pdf,
        },
      ]);
    }
  }, [book]);

  console.log(book);

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
        <main
          className={`mainContent clearfix ${classes.main}`}
          id='mainContent'
        >
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

          <Wrapper>
            <Container>
              <div className='row mb-5'>
                {/*Image Slider*/}
                <div className='col-md-3 col-12'>
                  <div className={`card ${classes.card}`}>
                    <div className={`card-body ${classes.cardBody}`}>
                      <ReactImageCarosule images={book && book.cover_images} />
                    </div>
                  </div>
                </div>
                {/*Product Information*/}
                <div className='col-md-6 col-12'>
                  <div className={`card ${classes.card}`}>
                    <div className={`card-body ${classes.cardBody}`}>
                      <h3 className={classes.bookName}>{book && book.name}</h3>
                      <p className={classes.bookAuthor}>
                        <span>By</span> {book && book.book_author.name}
                      </p>
                      <div className={classes.bookRating}>
                        <TotalRating value={book && book.rating} />
                        {book && book.rating}{' '}
                        {`(${book && book.total_review} reviews)`}
                      </div>

                      <div className={classes.btnContainer}>
                        {bookPriceBtn.map((item, index) => {
                          return (
                            <Buttons
                              key={index}
                              item={item}
                              message={message}
                              setMessage={setMessage}
                            />
                          );
                        })}
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
                <div className='col-md-3 col-12'>
                  <div className={`card ${classes.card}`}>
                    <div className={`card-body ${classes.cardBody}`}>
                      <h2 id='bookPrice' className={classes.bookCode}>
                        Ksh {book && book.price}
                        <small>Available</small>
                      </h2>

                      <ul className={`nav flex-column ${classes.deliveryNav}`}>
                        <li>Free delivery worldwide</li>
                        <li>
                          Available. Dispatched from the UK in 2 business days
                        </li>
                      </ul>

                      <input
                        className={classes.quantityInput}
                        type='number'
                        value={itemQty}
                        onChange={updateItemQty}
                        min={1}
                      />

                      <div className='mt-3'>
                        <button
                          className={`btn btn-block ${classes.cartBtn}`}
                          onClick={handleAddToCart}
                        >
                          <FiShoppingCart /> add to cart
                        </button>
                        <button
                          className={`btn btn-block ${classes.favBtn}`}
                          onClick={handleAddFavorite}
                        >
                          <AiOutlineStar /> add to fabourites
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*<div className='row'>*/}
              {/*    <div className='col-lg-7 col-md-6 col-sm-12 '>*/}
              {/*        <div className='row left'>*/}
              {/*            <div className='col-lg-4'>*/}
              {/*                <div className='img-container'>*/}
              {/*                    <ReactImageCarosule*/}
              {/*                        images={book && book.cover_images}*/}
              {/*                    />*/}
              {/*                </div>*/}
              {/*            </div>*/}
              {/*            <div className='col-lg-8'>*/}
              {/*                <div className='book-description'>*/}
              {/*                    <h3> {book ? book.name : ``}</h3>*/}
              {/*                    <hr/>*/}
              {/*                    <div className={classes.bookRating}>*/}
              {/*                        <TotalRating value={book && book.rating}/>*/}
              {/*                        {book && book.rating} {`(${book && book.total_review} reviews)`}*/}
              {/*                    </div>*/}
              {/*                    <p className='s'>Hardback | English</p>*/}
              {/*                    <p className='author'>*/}
              {/*                        By {book && book.book_author.name}*/}
              {/*                    </p>*/}
              {/*                    <div className='social'>*/}
              {/*                        <p>Share</p>*/}
              {/*                        <a href='#'>*/}
              {/*                            {' '}*/}
              {/*                            <AiOutlineMail className='social-icon'/>*/}
              {/*                        </a>*/}
              {/*                        <a href='#'>*/}
              {/*                            <FaFacebookF className='social-icon'/>*/}
              {/*                        </a>*/}
              {/*                        <a href='#'>*/}
              {/*                            {' '}*/}
              {/*                            <AiOutlineTwitter className='social-icon'/>*/}
              {/*                        </a>*/}
              {/*                        <a href='#'>*/}
              {/*                            <FaPinterestP className='social-icon'/>*/}
              {/*                        </a>*/}
              {/*                    </div>*/}
              {/*                    <div className='desc'>*/}
              {/*                        <p>*/}
              {/*                            {readmore*/}
              {/*                                ? book && book.long_description*/}
              {/*                                : `${*/}
              {/*                                    book &&*/}
              {/*                                    book.long_description.substring(0, 400)*/}
              {/*                                }...`}*/}
              {/*                            <p*/}
              {/*                                className='readmore'*/}
              {/*                                onClick={() => setReadmore(!readmore)}*/}
              {/*                            >*/}
              {/*                                {readmore ? `show less` : `read more`}*/}
              {/*                            </p>*/}
              {/*                        </p>*/}
              {/*                    </div>*/}
              {/*                </div>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className='col-lg-5 col-md-6 col-sm-12 '>*/}
              {/*        <div className='right'>*/}
              {/*            <div className='price'>*/}
              {/*                <h2> Ksh {book ? book.price : 0}</h2>*/}
              {/*                <hr/>*/}
              {/*            </div>*/}
              {/*            <div className='desc'>*/}
              {/*                <h5>*/}
              {/*                    <GiCommercialAirplane/>*/}
              {/*                    Free delivery worldwide*/}
              {/*                </h5>*/}
              {/*                <h5>*/}
              {/*                    <AiOutlineCheckCircle/>*/}
              {/*                    Available. Dispatched from the UK in 2 business days*/}
              {/*                </h5>*/}
              {/*                <p>*/}
              {/*                    <a href=''>When will my order arrive?</a>*/}
              {/*                    <hr/>*/}
              {/*                </p>*/}
              {/*            </div>*/}
              {/*            <div className='btn-container'>*/}
              {/*                {buttonData.map((item, index) => {*/}
              {/*                    return <Buttons key={index} {...item} />;*/}
              {/*                })}*/}
              {/*            </div>*/}
              {/*            <div className='btn-container'>*/}
              {/*                <input*/}
              {/*                    className='input-btn'*/}
              {/*                    type='number'*/}
              {/*                    value={itemQty}*/}
              {/*                    onChange={updateItemQty}*/}
              {/*                    min={1}*/}
              {/*                />*/}

              {/*                <button*/}
              {/*                    className='cart-btn btn'*/}
              {/*                    onClick={handleAddToCart}*/}
              {/*                >*/}
              {/*                    <FiShoppingCart/> add to cart*/}
              {/*                </button>*/}
              {/*                <button*/}
              {/*                    className='fab-btn btn'*/}
              {/*                    onClick={handleAddFavorite}*/}
              {/*                >*/}
              {/*                    <AiOutlineStar/> add to fabourites*/}
              {/*                </button>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}

              {/* Products details  */}

              {/*<div className='section'>*/}
              {/*    <h3>Book Details</h3>*/}
              {/*    <hr/>*/}
              {/*    <div className='row'>*/}
              {/*        <div className='col-md-3 col-sm-12'>*/}
              {/*            <p>*/}
              {/*                <span> id: </span> {book && book.id}*/}
              {/*            </p>*/}
              {/*            <p>*/}
              {/*                <span> author: </span> {book && book.book_author.name}*/}
              {/*            </p>*/}
              {/*            <p>*/}
              {/*                <span> discipline: </span>{' '}*/}
              {/*                {book && book.book_discipline.name}*/}
              {/*            </p>*/}
              {/*            <p>*/}
              {/*                <span> stage: </span> {book && book.book_stage.stage}*/}
              {/*            </p>*/}
              {/*            <p>*/}
              {/*                <span> publisher: </span>{' '}*/}
              {/*                {book && book.book_publisher.name}*/}
              {/*            </p>*/}
              {/*            <p>*/}
              {/*                <span> publishing_year: </span>{' '}*/}
              {/*                {book && book.book_publishing_year.name}*/}
              {/*            </p>*/}
              {/*        </div>*/}
              {/*        <div className='col-md-3 col-sm-12'>*/}
              {/*            <p>*/}
              {/*                <span> language: </span> {book && book.book_language.name}*/}
              {/*            </p>*/}
              {/*            <p>*/}
              {/*                <span> page_number: </span> {book && book.page_number}*/}
              {/*            </p>*/}
              {/*        </div>*/}
              {/*        <div className='col-md-3 col-sm-12'></div>*/}
              {/*        <div className='col-md-3 col-sm-12'></div>*/}
              {/*    </div>*/}
              {/*</div>*/}
            </Container>
          </Wrapper>
          {/* <Container>
                        <ForYou data={similar && similar.slice(0, 5)} />
                        <ForYou data={similar && similar.slice(6, 11)} />
                        <ForYou data={similar && similar.slice(12, 17)} />
                    </Container> */}

          <section>
            <TopDiscountProduct />
            <TopSaleProducts />
            <RecentSaleProducts />
          </section>

          <Wrapper>
            <Container>
              <div className='section'>
                <ReviewProduct
                  reviews={book && book.book_review ? book.book_review : []}
                  book_id={book && book.id}
                />
                {/* <h3>About DK</h3>
                                <hr />
                                <p>
                                    Written by {book && book.book_author.name}
                                </p> */}
              </div>
            </Container>
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
  p {
    font-size: 16px;
  }

  .left {
    padding: 0.5rem;
    min-height: 410px;
    margin: 0rem;
    -webkit-box-shadow: 0px 0px 6px -3px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 0px 6px -3px rgba(0, 0, 0, 0.45);
  }

  .book-description {
    margin-right: -5px;
  }

  .book-description h3 {
    line-height: 30px;
    margin-bottom: 0;
  }

  @media (max-width: 980px) {
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

  .img-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .img-container img {
    width: 100%;
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
    background: #fff;
    padding: 1rem;
    -webkit-box-shadow: 0px 0px 6px -3px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 0px 6px -3px rgba(0, 0, 0, 0.45);
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
      justify-content: space-between;
      display: flex;
      gap: 0.5rem;
      row-gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 2rem;

      @media (max-width: 525px) {
        flex-direction: column;
      }

      p {
        font-size: 10px;
        font-weight: 400;
        line-height: 18px;
        text-transform: capitalize;
      }

      .available {
        color: #222;
        margin-bottom: 0.1rem;
        opacity: 0;
        font-size: 10px;
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
        min-width: 90px;
        transition: all 0.3s ease;
        @media (max-width: 1199px) {
          min-width: 150px;
        }
        @media (max-width: 992px) {
          min-width: 140px;
        }
        @media (max-width: 767px) {
          min-width: 110px;
        }
        @media (max-width: 525px) {
          min-width: 100%;
        }
        //@media (min-width: 768px) and (max-width: 988px) {
        //  min-width: 130px;
        //}
        //@media (max-width: 463px) {
        //  min-width: 110px;
        //}
        //@media (min-width: 370px) and (max-width: 410px) {
        //  min-width: 150px;
        //}
        //@media (min-width: 320px) and (max-width: 369px) {
        //  min-width: 120px;
        //}
      }

      .btn svg {
        font-size: 15px;
        margin-right: 0.6rem;
        color: blue;
      }

      button span {
        display: flex;
        flex-direction: column;
      }

      .input-btn {
        width: 50px;
        @media (min-width: 768px) and (max-width: 1200px) {
          min-width: 100px;
          padding: 0 0.6rem;
        }
        @media (min-width: 335px) and (max-width: 466px) {
          min-width: 120px;
        }
        @media (min-width: 296px) and (max-width: 334px) {
          min-width: 80px;
        }
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
    -webkit-box-shadow: 0px 0px 6px -3px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 0px 6px -3px rgba(0, 0, 0, 0.45);
    padding: 0.5rem 0.8rem;
    margin: 1rem 0;

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
