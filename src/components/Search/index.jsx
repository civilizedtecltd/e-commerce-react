import React, { useState } from 'react';
import {Row , Col, Collapse, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import {searchBook} from '../../redux/actions/bookActions'
function Search(props) {
    const { page, show } = props
    const [keyword , setKeyWord] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

       return props.searchBook(page, show, keyword)
    }
    return(
        <Row>
        <Col>

          <Collapse in={props.open} >
            <form onSubmit={handleSubmit}>
            <div  className="searchBarNew">
              <div id="SearchBarMenu">
                <input type="text" className="form-control shadow-none" placeholder="Search" onChange={(event)=>setKeyWord(event.target.value)} />
                <span onClick={props.handleOpen}><i className="fas fa-times"></i></span>
                <button type="submit" >submit</button>
              </div>
            </div>
            </form>
          </Collapse>

        </Col>
      </Row>
    )
}



const mapDispatchToProps = dispatch => {
    return{
        searchBook:(page,show,keyword)=>dispatch(searchBook(page,show,keyword))
    } 
}

export default connect(null,mapDispatchToProps)(Search);