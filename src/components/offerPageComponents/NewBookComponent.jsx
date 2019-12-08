import React from 'react';
import{Link} from 'react-router-dom'
import {Col, Card, Image} from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import '../../assets/css/theme.css'


const NewBookComponent = ({bookid, BookImage, ProductTitle, AuthorName, ProductPrice, ImageBg ,isFev = false }) => {

  const imgStyle = {
        width:"163px",
        height:"224px"
    }
    const titleStyle ={
        width:"190px"
    }
    return(
        <Col className="col-auto">
            <LazyLoad once={true} height={200}>
                <Card className="productCard border-0 bg-transparent">
                    <div className={`productMedia mb-3 ${ImageBg}`}>
                        <Image src={BookImage} alt="Book Image" style={imgStyle} />
                    </div>
                    <div className="productContent">
                        <Link to={`/product/${bookid}`}><h4 className="productTitle limit-character mb-1" >{ProductTitle} {(isFev === true) ?<span className="favoritIcon"><i className="fas fa-star"></i></span> :''}</h4></Link>
                        <h5 className="authorName mb-1">{AuthorName}</h5>
                        <p className="productPrice">$ {ProductPrice}</p>
                        <button  className="btn btn-danger">Remove</button>
                    </div>
                </Card>
            </LazyLoad>
        </Col>)
}
export default NewBookComponent;
