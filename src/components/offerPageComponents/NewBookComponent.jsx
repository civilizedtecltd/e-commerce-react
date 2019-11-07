
import React from 'react';
import{Link} from 'react-router-dom'
import {Col, Card, Image} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NewBookDB} from "../../inc/offerPage/NewBook";



function NewBookComponent({BookImage, ProductTitle, AuthorName, ProductPrice, ImageBg }){
    return(
        <Col className="col-auto">
        <Card className="productCard border-0 bg-transparent">
            <div className={`productMedia mb-3 ${ImageBg}`}>
              <Image src={BookImage} alt="Book Image" />
            </div>

          <div className="productContent">
            <Link to="#"><h4 className="productTitle mb-1">{ProductTitle}</h4></Link>
            <h5 className="authorName mb-1">{AuthorName}</h5>
            <p className="productPrice">$ {ProductPrice}</p>
          </div>
        </Card>
      </Col>)
}

function ImgSlick() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div>
            <Slider {...settings}>
                {NewBookDB.map((value, index) =>
                    <div key={index}>
                        <Col className="col-auto">
                            <Card className="productCard border-0 bg-transparent">
                                <div className= "productMedia mb-3 bgGray">
                                     <Image src={value.Img} alt="Book Image" />
                                </div>

                                <div className="productContent">
                                    <Link to="#"><h4 className="productTitle mb-1">{value.Title}</h4></Link>
                                    <h5 className="authorName mb-1">{value.Author}</h5>
                                    <p className="productPrice">$ {value.Price}</p>
                                </div>
                            </Card>
                        </Col>
                    </div>
                )
                }
            </Slider>
        </div>
    );
}


export{
    NewBookComponent,
    ImgSlick
}

