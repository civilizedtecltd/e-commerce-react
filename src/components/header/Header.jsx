import React from 'react';
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../../assets/css/heder.css'
function HeaderComponent() {
    return(
    <>
      <div class="headerTopBar clearfix bgBlack" id="headerTopBar">
        <Container>
          <div class="row justify-content-between">
            <div class="col-auto">
              <div class="headFeature">
                <i class="fas fa-map-marker-alt"></i> <span>Delivery region: Nairobi</span>
              </div>
            </div>

            <div class="col-auto">
              <div class="headFeature">
                <ul class="headFeatureList d-flex justify-content-between">
                  <li><i class="fas fa-truck"></i> <span>Free delivery</span></li>
                  <li><i class="fas fa-award"></i> <span>Genuine goods</span></li>
                  <li><i class="fas fa-headset"></i> <span>Customer support</span></li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <header class="header clearfix" id="header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-1">
              <div class="logoWrapper">
                <h1 class="logoText"><Link to="#">LOGO</Link></h1>
              </div>
            </div>

            <div class="col-sm-5">
              <div class="headerNav clearfix" id="headerNav">
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item active">
                        <Link class="nav-link" to="#">Kindergarten <span class="sr-only">(current)</span></Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">Primary school</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">Secondary school</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">Stationery</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">Bibles</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="headPopBar clearfix float-right" id="headPopBar">
                <ul class="headPopBarList d-flex justify-content-between">
                  <li>
                    <div className="input-group searchbar">
                      <input type="search" className="react-search border-0" placeholder="Search" />
                      <span><Link to="#"><i className="fa fa-search"></i> Search</Link></span>
                    </div>
                    {/*<div className="container h-100">*/}
                    {/*  <div className="d-flex justify-content-center h-100">*/}
                    {/*    <div className="searchbar">*/}
                    {/*      <input className="search_input" type="text" name="" placeholder="Search..." />*/}
                    {/*        <span><a href="#" className="search_icon"><i className="fa fa-search"></i></a></span>*/}
                    {/*    </div>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </li>
                  <li><Link to="#"><i class="far fa-star"></i> Favorites</Link></li>
                  <li><Link to="#"><i class="fas fa-shopping-cart"></i> Cart</Link></li>
                  <li><Link to="#"><i class="far fa-user"></i> Login</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
        </>
    )
}

export default HeaderComponent;