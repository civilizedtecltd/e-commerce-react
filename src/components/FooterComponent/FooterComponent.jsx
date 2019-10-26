import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Lia ,Liai } from '../LiComponent/CommonLiComponent'

import paypalIcon from '../../assets/images/paypal_icon_img.png';
import masterCardIcon from '../../assets/images/master_card_icon_img.png';
import visaIcon from '../../assets/images/visa_icon_img.png';

function FooterComponent() {
    return(<>
      <footer className="footer clearfix bg-white pt-5 pb-5" id="footer">
        <Container>
          <Row>
            <Col>
              <div className="footerWidget">
                <div className="footerLogo">
                  <div className="logoWrapper">
                    <h1 className="logoText"><Link to="/">LOGO</Link></h1>
                  </div>{/*  end of logoWrapper */}
                </div>{/*  end of footerLogo */}
              </div>{/*  end of footerWidget */}
            </Col> {/*  end of col */}

            <Col sm="5">
              <div className="footerWidget">
                <h4 className="footerWidgetHeader">Information</h4>
                <ul className="footerLinksList">
                    {["Order status",
                    "How to place an order",
                    "Return" ,
                    "Terms & Conditions",
                    "Delivery details",
                    "Privacy Policy",
                    "Blog",
                    "Our support center"
                    ].map((list,index)=><Lia
                      key={index}
                      Title={list}
                      Url={'/'}
                    />)}
                </ul>{/*  end of footerLinksList */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

            <Col sm="2">
              <div className="footerWidget">
                <h4 className="footerWidgetHeader">Contact us</h4>
                <ul className="getInTouchList">
                  <li>
                    <Link to="mailto:you@example.com" title="click to mail us">noreplay@example.com</Link>
                  </li>{/*  end of li */}
                  <li>
                    <Link to="tele:1234567890" title="click to call us">+(123) 456 7890</Link>
                  </li>{/*  end of li */}
                  <li>
                    <p>Your long address, city, region, zip code</p>
                  </li>{/*  end of li */}
                </ul>{/*  end of getInTouchList */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

            <Col className="align-self-center">
              <div className="footerWidget">
                <ul className="footerSocial">
                  {[
                      {ListClass:"facebook", Url:"//facebook.com",IconName:"fab fa-facebook-f"},
                      {ListClass:"facebook" ,Url:"//instagram.com",IconName:"fab fa-instagram"},
                      {ListClass:"facebook",Url:"//twitter.com",IconName:"fab fa-twitter"},
                    ].map((list,index)=><Liai
                    Key={index}
                    ListClass={list.ListClass}
                    Url={list.IconName}
                    IconName={list.IconName}
                  />)}
                </ul>{/*  end of footerSocial */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </footer>{/* end of footer */}

      <div className="footerBottom clearfix pb-3" id="footerBottom">
        <Container>
          <hr className="hrBorder" />
          <Row className="align-items-center justify-content-between">
            <Col>
              <p className="copyrights">© { new Date().getFullYear() } All Rights Reserved</p>
            </Col>{/* end of Col */}

            <Col sm="3">
              <ul className="paymentsNav d-flex justify-content-between align-items-center">
                <li className="paypal">
                  <Link to="//paypal.com" title="paypal" target="_blank" ><img alt="paypal" src={paypalIcon} title="paypal" /></Link>
                </li>{/* end of li */}
                <li className="visa">
                  <Link to="//visa.com" title="visa" target="_blank"><img alt="visa card" src={visaIcon} title="visa card" /></Link>
                </li>{/* end of li */}
                <li className="master">
                  <Link to="//www.mastercard.us/en-us.html" title="master card" target="_blank"><img alt="master card" src={masterCardIcon} title="master card" /></Link>
                </li>{/* end of li */}
              </ul>{/* end of paymentsNav */}
            </Col>{/* end of Col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of footerBottom */}
        </>)
}

export default FooterComponent;