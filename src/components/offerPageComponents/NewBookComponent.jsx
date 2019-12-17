import React from 'react';
import{Link} from 'react-router-dom'
import {Col, Card, Image} from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import '../../assets/css/theme.css'
import { connect } from 'react-redux';
const NewBookComponent = ({bookId, BookImage, ProductTitle, AuthorName, ProductPrice, ImageBg ,isFev = false , removeFavItem , stateFav, favorite }) => {


  const imgStyle = {
        width:"163px",
    }
  const handleRemove = (bookId) => {
    removeFavItem(bookId)
  }


    return(
        <Col className="col-auto">
            <LazyLoad once={true} height={200}>
                <Card className="productCard border-0 bg-transparent">
                    <div className={`productMedia mb-3 ${ImageBg}`}>
                        <Image src={BookImage} alt="Book Image" style={imgStyle} />
                    </div>
                    <div className="productContent">
                        <Link to={`/product/${bookId}`}><h4 className="productTitle limit-character mb-1" >{ProductTitle} {(isFev === true) ?<span className="favoritIcon"><i className="fas fa-star"></i></span> :''}</h4></Link>
                        <h5 className="authorName mb-1">{AuthorName}</h5>
                        <p className="productPrice">$ {ProductPrice}</p>
                        <button  className="btn btn-danger" onClick = { handleRemove.bind(this, bookId) }>Remove</button>
                    </div>
                </Card>
            </LazyLoad>
        </Col>)
}
const mapStateToProps = (state) => {
    return{
        favorite: state.favorite
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         removeFavorite : (id)=>dispatch(removeFavItem(id))
//     }
// }
export default connect(mapStateToProps, null)(NewBookComponent);
// export default NewBookComponent;
