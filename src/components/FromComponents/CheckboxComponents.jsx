import React from 'react';
import {Form} from 'react-bootstrap';



//Input From Components
function CheckboxComponent({ControlId, ClassName, Type, Label}) {
    return(
        <Form.Group controlId={ControlId} className={ClassName}>
            <Form.Check type={Type} label={Label} />
        </Form.Group>
    )
 }

 export {
    CheckboxComponent
 }
