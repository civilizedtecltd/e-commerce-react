import React ,{useState} from 'react';
import {Container,Row, Col, Form, FormControl,
  Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../../assets/css/heder.css'
import { CSSTransition,TransitionGroup } from 'react-transition-group';

function HeaderComponent() {

  const [showSearch, setShowSearchHide] = useState(false);

    return(
    <>

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
                  <li><i className="fas fa-headset"></i> <span>Customer support</span></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <header className="header clearfix" id="header">
        <Container>
          <Row className="align-items-center">
            <Col sm="1">
              <div className="logoWrapper">
                <h1 className="logoText"><Link to="#">LOGO</Link></h1>
              </div>
            </Col>

            <Col sm="5">
              <div className="headerNav clearfix" id="headerNav">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <Link className="nav-link" to="#">Kindergarten <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Primary school</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Secondary school</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Stationery</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Bibles</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </Col>

            <Col sm="6">
              <div className="headPopBar clearfix float-right" id="headPopBar">
                <ul className="headPopBarList d-flex justify-content-between">
                  <li>
                    <div classNameName="input-group searchbar">
                      <Link to="#" onClick={() => setShowSearchHide(!showSearch)}><i className="fa fa-search"></i> Search</Link>
                    </div>
                  </li>
                  <li><Link to="#"><i className="far fa-star"></i> Favorites</Link></li>
                  <li><Link to="#"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
                  <li><Link to="#"><i className="far fa-user"></i> Login</Link></li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <CSSTransition in={showSearch} timeout={100} unmountOnExit classNames="alert">
                <div className="searchBarProduct mb-3">
                  <Form.Control type="search" className="searchProduct shadow-none" placeholder="Search" />
                  <span onClick={() => setShowSearchHide(false)}><i className="fas fa-times"></i></span>
                </div>
              </CSSTransition>
            </Col>
          </Row>
        </Container>
      </header>

        </>
    )
}

export default HeaderComponent;
