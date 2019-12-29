import React, { useState } from 'react';
import {Row , Col, Collapse} from 'react-bootstrap';
import {  useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchAllBook } from '../../redux/actions/bookActions'
function Search(props) {
    const history = useHistory()
    const { page, show } = props
    const [keyword , setKeyWord] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.fetchAllBook(page, show, keyword)
        history.push(`/shop/category/all/${page}/${show}/${keyword}`)
    }
    return(

        <Row>
            <Col>
                <Collapse in={props.open} >
                    <form onSubmit={handleSubmit}>
                        <div  className="searchBarNew">
                            <div id="SearchBarMenu">
                                <input type="text" className="form-control shadow-none" placeholder="Search" onChange={(event)=>setKeyWord(event.target.value)}  />
                                <span onClick={props.handleOpen}><i className="fas fa-times"></i></span>
                                <button type="submit" hidden >submit</button>
                            </div>
                        </div>
                    </form>
                </Collapse>

            </Col>
        </Row>
    )
}


const mapStateToProps = (state) => {
  return{
    book: state.book
  }
}
const mapDispatchToProps = dispatch => {
    return{
      fetchAllBook:(page,show,keyword)=>dispatch(fetchAllBook(page,show,keyword))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
