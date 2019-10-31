import React from 'react';
import {Form} from 'react-bootstrap';
import {category} from '../../inc/auth/Singup'
//Input From Components
function InputFrom({LabelId, TypeName, LabelTitle, Name, Value, Placeholder,controlId, ClassName}) {
    return(
        <Form.Group controlId={controlId}  className={ClassName}>
            <Form.Label htmlFor={LabelId}>{LabelTitle}</Form.Label>
            <Form.Control type={TypeName} id={LabelId} name={Name} value={Value} placeholder={Placeholder}/>
        </Form.Group>
    )
 }

//Select From Components
 function SelectFrom({LabelTitle, controlId}){
     return(
        <Form.Group controlId={controlId}>
            <Form.Label>{LabelTitle}</Form.Label>
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
