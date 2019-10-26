import React from 'react';
import{Link} from 'react-router-dom'
import {Col, Card} from 'react-bootstrap';

function NewBookComponent({BookImage, ProductTitle, AuthorName, ProductPrice }){
    return(
        <Col className="col-auto">
        <Card className="productCard border-0 bg-transparent">
          <div className="productMedia mb-3 bg-white">
            <img src={BookImage} alt="" />
          </div>

          <div className="productContent">
            <Link to="#"><h4 className="productTitle mb-1">{ProductTitle}</h4></Link> 
            <h5 className="authorName mb-1">{AuthorName}</h5>
            <p className="productPrice">$ {ProductPrice}</p>
          </div>
        </Card>
      </Col>
    )
}

export{
    NewBookComponent
}