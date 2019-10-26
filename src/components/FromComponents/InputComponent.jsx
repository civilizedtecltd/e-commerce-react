import React from 'react';
import {Form} from 'react-bootstrap';
import {category} from '../../inc/auth/Singup'
//Input From Components
function InputFrom({LableId, TypeName, LableTitle, Name, Value, Placeholder,controlId}) {
    return(
        <Form.Group controlId={controlId}>
            <Form.Label htmlFor={LableId}>{LableTitle}</Form.Label>
            <Form.Control type={TypeName} id={LableId} name={Name} value={Value} placeholder={Placeholder}/>
        </Form.Group>
    )
 }

//Select From Components
 function SelectFrom({LableTitle, controlId}){
     return(
        <Form.Group controlId={controlId}>
            <Form.Label>{LableTitle}</Form.Label>
            <Form.Control as="select">
                {category.map(value=>
                        <option>{value}</option>
                    )
                }
            </Form.Control>
      </Form.Group> 
     )
 }


 export{
    InputFrom,
    SelectFrom
 }