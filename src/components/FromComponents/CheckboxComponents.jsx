import React from 'react';
import {Form} from 'react-bootstrap';



//Input From Components
function CheckboxComponent({ControlId, ClassName, Type, Label,name,checked, callback}) {
    return(
        <Form.Group controlId={ControlId} className={ClassName}>
            <Form.Check type={Type} label={Label} name={name} checked={checked} onChange={callback.bind(this)}/>
        </Form.Group>
    )
 }

 export {
    CheckboxComponent
 }
