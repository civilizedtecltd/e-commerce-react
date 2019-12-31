import React ,{useState, useEffect} from 'react';
import {Container, Row, Col, Badge, Image} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import { connect } from 'react-redux'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Menu from '../LiComponent/MenuComponents'
import checkAuth from '../../helpers/checkAuth';
import '../../assets/css/heder.css';
import menu from "../../inc/menu/menu";
import { useMediaQuery } from 'react-responsive';
import Search from '../Search';
import ProfileAvatar from '../../assets/images/user/avatar.png';

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 992 })
  return isNotMobile ? children : null
}


// eslint-disable-next-line
const HeaderComponent = (props) => {

  const [open, setOpen] = useState(false);
  const [isAuth, setAuth] = useState(false);
  let page = 1;
  let show =5
  const user = { ...props.auth.user}
  useEffect(()=>{
    return (checkAuth()) ? setAuth(true) : setAuth(false);
  },[]);

  const handleOpen = () => setOpen(!open)

  return(
      <>
        <Default>
          <div className="headerTopBar clearfix bgBlack" id="headerTopBar">
            <Container fluid={props.menuActive}>
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
                      <li className="customer-support"><AnchorLink offset={() => 100} href='#footer'><i className="fas fa-headset"></i><span>Customer support</span></AnchorLink></li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <header className="header clearfix " id="header">
            <Container fluid={props.menuActive}>
              <Row className="align-items-center">
                <Col sm={props.menuActive ? 2 : 1}>
                  <div className="logoWrapper">
                    <h1 className="logoText"><Link to="/">LOGO</Link></h1>
                  </div>
                </Col>

                <Col sm={props.menuActive ? 6 : 6}>
                  <div className="headerNav clearfix" id="headerNav">
                    <nav className="navbar navbar-expand-lg  bg-white p-0 nav-bar">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                          {menu.map((data, index) =>
                              <Menu
                                  key={index}
                                  NavItem={data.nav_item}
                                  ClassName={data.class}
                                  Title={data.title}
                                  Url={data.Url}
                                  ActiveClassName={data.active_link}
                              />
                          )}
                          <li className="nav-item">
                               <i className="fas fa-ellipsis-h megaMenuIcon"></i>
                            <div className="mega-menu">
                              <div className="inner-mega-menu">
                                <ul>
                                  <li className="nav-item"><NavLink to="/ghsd" className="nav-link">Computer</NavLink></li>
                                  <li className="nav-item"><NavLink to="/sf" className="nav-link">Mobile</NavLink></li>
                                  <li className="nav-item"><NavLink to="/dsfds" className="nav-link">Laptop</NavLink></li>
                                  <li className="nav-item"><NavLink to="/dfsf" className="nav-link">Laptop</NavLink></li>
                                  <li className="nav-item"><NavLink to="/ewrw" className="nav-link">Laptop</NavLink></li>

                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </Col>

                <Col sm={props.menuActive ? 4 : 5}>
                  <div className="headPopBar clearfix" id="headPopBar">
                    <ul className="headPopBarList d-flex justify-content-end">
                      <li>
                        <div className={`input-group`}>
                          <div className="cursor-type" onClick={() => setOpen(!open)} aria-controls="SearchBarMenu" aria-expanded={open} ><i className={`fa fa-search`}></i> Search</div>
                        </div>
                      </li>
                      <li><Link to="/favorites"><span className="cartBadge"><i className="far fa-star"></i>{props.favorite_item !== 0 ? <Badge variant="danger"> {props.favorite_item} </Badge> : ''}</span> Favorites</Link></li>
                      <li><Link to="/cart"><span className="cartBadge"><i className="fas fa-shopping-cart"></i>{props.cartItem !==0 ?<Badge variant="primary">{ props.cartItem }</Badge> :'' }</span> Cart</Link></li>
                      <li>{ (!isAuth) ? <Link to="/login"><i className="far fa-user"></i>Login</Link> : <Link to="/profile-settings"><div className="Profile-avatar"><Image src={ProfileAvatar} /><p>{ user.first_name } { user.last_name }</p></div></Link> }</li>
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
        </Default>
      </>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  status: state.auth.status,
})

export default connect(mapStateToProps)( HeaderComponent);
