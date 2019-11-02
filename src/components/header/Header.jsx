import React ,{useState} from 'react';
import {Container, Row, Col, Form, Badge, Collapse, Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../../assets/css/heder.css'
import { useMediaQuery } from 'react-responsive'


const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

function HeaderComponent() {

  const [open, setOpen] = useState(false);

    return(
    <>
      <Default>
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
            <Col sm="2">
              <div className="logoWrapper">
                <h1 className="logoText"><Link to="#">LOGO</Link></h1>
              </div>
            </Col>

            <Col sm="6">
              <div className="headerNav clearfix" id="headerNav">
                <nav className="navbar navbar-expand-lg  bg-white">
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

            <Col sm="4">
              <div className="headPopBar clearfix" id="headPopBar">
                <ul className="headPopBarList d-flex justify-content-between">
                  <li>
                    <div className="input-group">
                      <Link onClick={() => setOpen(!open)} aria-controls="SearchBarMenu" aria-expanded={open} ><i className="fa fa-search"></i> Search</Link>
                    </div>
                  </li>
                  <li><Link to="#"><span className="cartBadge"><i className="far fa-star"></i><Badge variant="danger">10</Badge></span> Favorites</Link></li>
                  <li><Link to="#"><span className="cartBadge"><i className="fas fa-shopping-cart"></i> <Badge variant="primary">10</Badge></span> Cart</Link></li>
                  <li><Link to="#"><i className="far fa-user"></i> Login</Link></li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Collapse in={open} >
                <div  className="searchBarNew">
                  <div id="SearchBarMenu">
                    <Form.Control type="text" className="shadow-none" placeholder="Search" />
                    <span onClick={() => setOpen(false)}><i className="fas fa-times"></i></span>
                  </div>
                </div>
              </Collapse>

            </Col>
          </Row>
        </Container>
      </header>
      </Default>
        </>
    )
}





  function MobileHeader () {
    const [open, setOpen] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     return(<>
       <Mobile>
         <header className="header clearfix" id="header">
           <Container>
             <Row className="align-items-center justify-content-between">
               <Col className="col-auto">
                 <div className="logoWrapper">
                   <h1 className="logoText"><Link to="#">LOGO</Link></h1>
                 </div>
               </Col>

               <Col className="col-auto">
                 <div className="headPopBar clearfix" id="headPopBar">
                   <ul className="headPopBarList d-flex">
                     <li>
                       <div className="input-group searchbar">
                         <Link onClick={() => setOpen(!open)} aria-controls="SearchBarMenu" aria-expanded={open}><i
                             className="fa fa-search"></i> Search</Link>
                       </div>
                     </li>
                     <li><Link to="#"><span className="cartBadge"><i className="fas fa-shopping-cart"></i> <Badge
                         variant="primary">10</Badge></span> Cart</Link></li>
                     <li>
                       <div className="mobileNavModal">
                         <a onClick={handleShow}><i className="fas fa-bars"></i></a>
                       </div>
                     </li>
                   </ul>
                 </div>

               </Col>
             </Row>

             <Row>
               <Col>
                 <Collapse in={open}>
                   <div className="searchBarNew">
                     <div id="SearchBarMenu">
                       <Form.Control type="text" className="shadow-none" placeholder="Search"/>
                       <span onClick={() => setOpen(false)}><i className="fas fa-times"></i></span>
                     </div>
                   </div>
                 </Collapse>
               </Col>
             </Row>
           </Container>
         </header>

         <Modal show={show} onHide={handleClose}>
           <Modal.Header className="ModaCloseBtn" closeButton></Modal.Header>
           <Modal.Body>
             <ul className="mobileNav">
               <li><a href="#">Kindergarten </a></li>
               <li><a href="#">Kindergarten </a></li>
               <li><a href="#">Kindergarten </a></li>
               <li><a href="#">Kindergarten </a></li>
               <li><a href="#">Kindergarten </a></li>
               <li><a href="#">Kindergarten </a></li>
             </ul>

           </Modal.Body>
           <Modal.Footer className="modal-footer-btn-group pt-4 pb-4 pl-1 pr-1">
             <Col>
               <Link className="btn btn-border">Login</Link>
             </Col>
             <Col>
               <Link href="/home"><span className="cartBadge"><i className="far fa-star"></i><span
                   className="badge badge-danger">10</span></span> Favorites</Link>
             </Col>
           </Modal.Footer>
         </Modal>
        </Mobile>
     </>)
  }

export {
    HeaderComponent,
    MobileHeader
}
