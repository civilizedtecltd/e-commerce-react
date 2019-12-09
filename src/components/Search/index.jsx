import React from 'react';
import {Row , Col, Collapse, Form} from 'react-bootstrap'
function Search({open, handleOpen }) {
    return(
        <Row>
        <Col>
          <Collapse in={open} >
            <div  className="searchBarNew">
              <div id="SearchBarMenu">
                <Form.Control type="text" className="shadow-none" placeholder="Search" />
                <span onClick={handleOpen}><i className="fas fa-times"></i></span>
              </div>
            </div>
          </Collapse>

        </Col>
      </Row>
    )
}

export default Search;