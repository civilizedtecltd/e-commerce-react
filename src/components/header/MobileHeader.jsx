// eslint-disable-next-line
import React ,{useState, useEffect} from 'react';
import { Container, Row, Col, Badge, Modal } from 'react-bootstrap';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import checkAuth from '../../helpers/checkAuth';
import '../../assets/css/heder.css';
import Search from "../Search";


const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 991 })
    return isMobile ? children : null
}

const MobileHeader = (props) => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [isAuth, setAuth] = useState(false);
    let page = 1;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        return (checkAuth()) ? setAuth(true) : setAuth(false);
    },[]);
    const handleOpen = () => setOpen(!open)

    return(<>
        <Mobile>
            <div className="headerTopBar clearfix bgBlack" id="headerTopBar">
                <Container>
                    <Row className="justify-content-between">
                        <Col className="col-auto">
                            <div className="headFeature">
                                <i className="fas fa-map-marker-alt"></i> <span>Delivery region: Nairobi</span>
                            </div>
                        </Col>

                        <Col className="col-auto">
                            <div className="headFeature">
                                <ul className="headFeatureList d-flex justify-content-between">
                                    <li><i className="fas fa-truck"></i> <span>Free delivery</span></li>
                                    <li><i className="fas fa-award"></i> <span>Genuine goods</span></li>
                                    <li><Link to="#"> <i className="fas fa-headset"></i> <span>Customer support</span></Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <header className="header clearfix" id="header">
                <Container>
                    <Row className="align-items-center justify-content-between">
                        <Col className="col-auto">
                            <div className="logoWrapper">
                                <h1 className="logoText"><Link to="/">LOGO</Link></h1>
                            </div>
                        </Col>

                        <Col className="col-auto">
                            <div className="headPopBar clearfix" id="headPopBar">
                                <ul className="headPopBarList d-flex align-items-center">
                                    <li>
                                        <div className="input-group searchbar">
                                            <div onClick={() => setOpen(!open)} aria-controls="SearchBarMenu" aria-expanded={open}><i className="fa fa-search"></i> Search</div>
                                        </div>
                                    </li>
                                    <li><Link to="/cart"><span className="cartBadge"><i className="fas fa-shopping-cart"></i>{props.cartItem !==0 ?<Badge variant="primary">{props.cartItem}</Badge> :'' }</span> Cart</Link></li>
                                    <li>
                                        <div className="mobileNavModal">
                                            <span onClick={handleShow}><i className="fas fa-bars"></i></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </Col>
                    </Row>

                    <Search
                        open={open}
                        handleOpen={handleOpen}
                        page={page}
                        show={show}
                    />
                </Container>
            </header>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="ModalCloseBtn" closeButton></Modal.Header>
                <Modal.Body>
                    <ul className="mobileNav">
                        {props.categories ?
                            props.categories.map((data, index) => (
                                <li key={index}>
                                    <Link to={`/shop/category/${data.id}/${data.category}`}> {data.category} </Link>
                                </li>)
                            )
                            : ''
                        }
                    </ul>

                    <hr className="borderHr" />

                    <ul className="mobileNav userMbNav">
                        <li className="active"><Link to="/my-order"><i className="fas fa-clipboard-list"></i> My orders </Link></li>
                        <li><Link to="/payment-methods"><i className="fas fa-wallet"></i> Payment methods </Link></li>
                        <li><Link to="/profile-settings"><i className="fas fa-cog"></i> Profile settings </Link></li>
                        <li><Link to="/email-subscription"><i className="far fa-envelope"></i> Email subscription </Link></li>
                    </ul>
                </Modal.Body>
                <Modal.Footer className="modal-footer-btn-group pt-4 pb-4 pl-1 pr-1">
                    <Col>
                        {(!isAuth)? <Link to="/login" className="btn btn-border">Login</Link> : <Link to="/profile-settings" className="btn btn-border">My Profile</Link> }

                    </Col>
                    <Col>
                        <Link to="/favorites">
                             <span className="cartBadge">
                            <i className="far fa-star"></i>{props.favorite_item !== 0 ? <Badge variant="danger"> {props.favorite_item} </Badge> : ''}</span> Favorites
                            {/* <li><Link to="/favorites"><span className="cartBadge"><i className="far fa-star"></i>{props.favorite_item !== 0 ? <Badge variant="danger"> {props.favorite_item} </Badge> : ''}</span> Favorites</Link></li> */}
                        </Link>
                    </Col>
                </Modal.Footer>
            </Modal>
        </Mobile>
    </>)
}
const mapStateToProps = state => ({
  auth: state.auth,
  status: state.auth.status,
  categories: state.site.categories
});
export default connect(mapStateToProps)(MobileHeader);
