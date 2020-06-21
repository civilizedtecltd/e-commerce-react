import React, { useState ,useEffect } from "react";
import { connect } from 'react-redux'
import { Container, Modal, Button, Row, Col } from "react-bootstrap";
import { Link , useParams } from "react-router-dom";
import {createUseStyles} from 'react-jss';
import { showSingleBook } from '../redux/actions/bookActions';
import { addToCart, updateQuantity, deliveryMethod } from '../redux/actions/shopActions';
import { addToFavorite,removeFavItem } from "../redux/actions/favoriteActions";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import ImgSlick  from "../components/offerPageComponents/ImgSlickComponent";
import { ImageCarousel } from "../components/ProductImgCarosellComponents/ProductImgCarosell";
import  HeaderComponent from "../components/header/Header";
import  MobileHeader from "../components/header/MobileHeader";
import TabComponent from "../components/TabComponent/TabComponent";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import checkAuth from "../helpers/checkAuth";
import TotalRating from "../components/ratingComponent/TotalRating";
import PageLoader from "../components/pageLoader/PageLoaderComponent";
import "../pages/assets/product.css";
import "../assets/css/theme.css";

const useStyles = createUseStyles({
  addFevButton: {
    color: 'skyblue',
    backgroundColor: 'white'
  },
})


function ProductPage(props) {

  const { showSingleBook,
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

  } = props

    const classes = useStyles()
    const { id } = useParams();
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
      window.scrollTo(0, 0);
      showSingleBook(id);
      getDeliveryMethods()

    }, [id, getDeliveryMethods, showSingleBook]);


  let itemQty = quantity;
  
  const handleClose = () => setShow(false);
    cart.map(item => {
        if(item.id === Number(id)){
           return itemQty = Number(item.quantity)
        }
    })

    const favoriteItem = favorite.items;
    const isFavoriteItem = favoriteItem.find(fav=> fav.id === Number(id))

    const updateItemQty = (e) => {
      //let countQty = quantity
      setQuantity(Number(e.target.value));
      updateItem({id: Number(book.id),qty: Number(e.target.value)});
    }

    const handleAddToCart = (e) => {
      e.preventDefault();
      if(!checkAuth()) return window.location='/login';
      book.quantity = quantity;
      addToCart(book);
      setShow(true);
      if (favoriteItem.length !== 0) {
        favoriteItem.map(item => item.id === book.id ? removeFavorite(book.id) : '')
      }
    };

    const handleAddFavorite = (e) =>{
        e.preventDefault();
        if(!checkAuth()){
          return history.push('/login')
        }else if(isFavoriteItem){
          return removeFavorite(id)
        }
        else if(!isFavoriteItem){
          addToFavorite(id)
        }
    }

  return (
    <>
      <PageLoader loading={ pending && pending}/>
      <div className="allWrapper">
        <HeaderComponent
          favorite_item={favoriteItem.length}
          cartItem={ totalItems && totalItems }
        />
        <MobileHeader
          favorite_item ={favoriteItem.length}
          cartItem={totalItems && totalItems }
         />
        <main className="mainContent clearfix" id="mainContent">
          <section
            className="breadcrumbArea secGap pb-0 clearfix"
            id="breadcrumb"
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
            className="mainBodyContent productDetails secGap clearfix"
            id="mainBodyContent"
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <ImageCarousel images = {(book && book.cover_images )}/>
                </div>

                <div className="col-sm-6">
                  <div className="card productCardDetails border-0">
                    <div className="card-header border-0 pr-0 bg-white">

                      <div className="productCardHead">
                        <div className="Product-title-product-page mr-4">
                          <p className="productSingleTitle">
                            { book ? book.name : ``}
                          </p>
                        </div>
                        <div className="d-flex text-right">
                          <TotalRating  value= { book && book.rating }/>
                          <div style={{marginTop:"-3px"}}><p>{'\u00A0'} {'\u00A0'} {`(${book && book.total_review} reviews) `} </p></div>
                        </div>
                      </div>

                      <h6 className="authName">
                        by <span>{ book && book.book_author.name} </span>
                      </h6>

                    </div>

                    <div className="card-body productCardBody">
                      <h5 className="product-single-Price mb-4">
                        Ksh {book ? book.price : 0 }
                        <span className="productAvailability">{book ? ((book.status === 1) ? `Available` : `Unavailable`) : ``}</span>
                      </h5>
                      <div className="productSortDes">
                        <p>
                          {book ? book.short_description : ``}
                        </p>
                      </div>

                      <div className="productBtnGroup mt-4 clearfix">
                        <div className="row no-gutters">
                          <div className="col-sm-2">
                            <input
                              className="form-control inputValue"
                              type="number"
                              value = {itemQty}
                              onChange = {updateItemQty}
                              min={1}
                            />
                          </div>

                          <div className="col text-center">
                            <Button
                              className="btn linkBtn"
                              onClick={handleAddToCart}
                            >
                              <i className="fas fa-shopping-cart"></i> Add to Cart
                            </Button>

                          </div>

                          <div className="col text-center">
                            <Button  className={`btn ${classes.addFevButton} ${(isFavoriteItem !== undefined) ? 'favorite-btn' : 'linkBtnBorder'}`} onClick={handleAddFavorite}>
                            <i className="fas fa-star"></i>{(isFavoriteItem !== undefined) ? "Remove favorite" : "Add to favorites"}
                            </Button>
                          </div>
                        </div>
                        <hr className="hrBorder mt-4" />
                      </div>
                      <TabComponent
                        routeHistory = {history}
                        description = {book ? book.long_description : `` }
                        specification = {book ? [{
                            id              : book.id,
                            author          : book.book_author.name,
                            discipline      : book.book_discipline.name,
                            stage           : book.book_stage.stage,
                            publisher       : book.book_publisher.name,
                            publishing_year : book.book_publishing_year.name,                           
                            language        : book.book_language.name,
                            page_number     : book.page_number

                        }] : {}}

                        reviews = { book && book.book_review ? book.book_review : []}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section
            className="similarBooks SimilarBookSlider productView secGap clearfix secBorder"
            id="similarBooks"
          >
            <Container>
                <div className="row">
                    <div className="col text-center">
                        <h2 className="sectionTitle mb-5">
                            <span>Similar</span> Book
                        </h2>
                    </div>
                </div>

                <ImgSlick images={similar ? similar : [] } />

            </Container>
          </section>
        </main>

        <section
          className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap"
          id="mailSubscribe"
        >
          <Container className="container">
            <NewsLetterComponent />
          </Container>
        </section>
        <FooterComponent />
      </div>

      <Modal show = {show} onHide = { handleClose }>
        <Modal.Header className={"border-0"} closeButton>
        </Modal.Header>
        <Modal.Body>
          <h2 className={"text-center"}>
            Product added to cart successfully!
          </h2>
        </Modal.Body>
        <Modal.Footer className={"border-0 modal-footer-mobile modal-footer-alignment"}>

         <div className="modalBottomAlignment">
             <Link to="/checkout" className="btn btn-primary mobile-view-btn" style={{color:'white'}}> Go to checkout </Link>
             <Link to='/shopping' className="btn btn-outline linkBtnBorder mobile-view-btn" style={{color:'white !important'}}> Continue shopping</Link>
         </div>

        </Modal.Footer>
      </Modal>
    </>
  );
}


const mapStateToProps = (state)=> {
  return {
    book: state.book.info,
    similar: state.book.similar,
    pending: (state.book.pending) ? state.book.pending : false,
    cart: state.shop.cart,
    totalItems: state.shop.cart.length,
    favorite: state.favorite,
    rating: state.book.info
  }
}


const mapDispatchToProps = (dispatch) => {
    return{
      showSingleBook      : (id) => dispatch(showSingleBook(id)),
      addToCart           : (favorite, book) => dispatch(addToCart(favorite, book)),
      updateItem          : ({id, qty}) => dispatch(updateQuantity({id, qty})),
      addToFavorite       : (id)=> dispatch(addToFavorite(id)),
      removeFavorite      : (id) => dispatch(removeFavItem(id)),
      getDeliveryMethods  : () => dispatch(deliveryMethod()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductPage);
