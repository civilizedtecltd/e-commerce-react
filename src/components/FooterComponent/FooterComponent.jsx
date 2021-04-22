import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Lia ,LiAi } from '../LiComponent/CommonLiComponent'

import paypalIcon from '../../assets/images/paypal_icon_img.png';
import masterCardIcon from '../../assets/images/master_card_icon_img.png';
import visaIcon from '../../assets/images/visa_icon_img.png';
import Logo from '../../assets/images/logo.png';
import footer from "../../inc/footer/footer";

function FooterComponent(props) {
    return(<>
      <footer className="footer clearfix bg-white pt-5 pb-5" id="footer">
        <Container>
          <Row>
            <Col>
              <div className="footerWidget">
                <div className="footerLogo">
                  <div className="logoWrapper">
                    <h1 className="logoText"><Link to="/"><img loading="lazy" src={Logo} alt="abooksore logo" /></Link></h1>
                  </div>{/*  end of logoWrapper */}
                </div>{/*  end of footerLogo */}
              </div>{/*  end of footerWidget */}
            </Col> {/*  end of col */}

            <Col sm="5">
              <div className="footerWidget">
                <div className="footerWidgetHeader">Information</div>
                <ul className="footerLinksList">
                    {footer.map((list, index)=><Lia
                      key={index}
                      Title={list.name}
                      Url={list.url}
                    />)}
                </ul>{/*  end of footerLinksList */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

            <Col sm="2">
              <div className="footerWidget">
                <div className="footerWidgetHeader">Contact us</div>
                <ul className="getInTouchList">
                  <li>
                    <a href="mailto:you@example.com" title="click to mail us">info@abookstore.co.ke</a>
                  </li>{/*  end of li */}
                  <li>
                    <a href="tele:1234567890" title="click to call us">0745203001</a>
                  </li>{/*  end of li */}
                  <li>
                    <p>P.O. BOX 50726, City Square - 00200</p>
                  </li>{/*  end of li */}
                </ul>{/*  end of getInTouchList */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

            <Col className="align-self-center">
              <div className="footerWidget">
                <ul className="footerSocial">
                  {[
                      {ListClass:"facebook", Url:"https://www.facebook.com/Abookstore-574617176550119/", IconName:"fab fa-facebook-f"},
                      {ListClass:"facebook", Url:"https://www.instagram.com/abookstore_/", IconName:"fab fa-instagram"},
                      {ListClass:"facebook", Url:"https://twitter.com/abookstore3", IconName:"fab fa-twitter"},
                    ].map((list,index)=><LiAi
                      key={index}
                      ListClass={list.ListClass}
                      Url={list.Url}
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
                  <Link to="//paypal.com" title="paypal" rel="noopener noreferrer" target="_blank" ><img loading="lazy" src={paypalIcon} alt="abookstore paypal" title="paypal" /></Link>
                </li>{/* end of li */}
                <li className="visa">
                  <Link to="//visa.com" title="visa" rel="noopener noreferrer" target="_blank"><img loading="lazy" alt="visa card" src={visaIcon} title="visa card" /></Link>
                </li>{/* end of li */}
                <li className="master">
                  <Link to="//www.mastercard.us/en-us.html" rel="noopener noreferrer" title="master card" target="_blank"><img loading="lazy" alt="master card" src={masterCardIcon} title="master card" /></Link>
                </li>{/* end of li */}
              </ul>{/* end of paymentsNav */}
            </Col>{/* end of Col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of footerBottom */}
    </>)
}

export default FooterComponent;
