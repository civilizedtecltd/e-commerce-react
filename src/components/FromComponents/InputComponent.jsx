import React from 'react';
import { Form } from 'react-bootstrap';

//Input From Components



function InputFrom({ LableId, TypeName, LableTitle, Name, Value, Placeholder, controlId, ClassName, callback }) {
    const handleOnchange = event => {
        let data = {
            [event.target.name] : event.target.value
        }
        callback(data)
    }
    return (
        <Form.Group controlId={controlId} className={ClassName}>
            <Form.Label htmlFor={LableId}>{LableTitle}</Form.Label>
            <Form.Control type={TypeName} id={LableId} name={Name} defaultValue={Value} placeholder={Placeholder} onChange = {handleOnchange} />
        </Form.Group>
    )
}

//Select From Components
function SelectFrom({ LableTitle, controlId, category, callback }) {
    const handleOnchange = (event) => {
        callback({
            category_id: event.target.value
        });
    }
    return (
        <Form.Group controlId={controlId}>
            <Form.Label> {LableTitle} </Form.Label>
            <Form.Control as="select" onChange = {handleOnchange}>
                        <option defaultValue>Select Category</option>
                {
                    category.map((element) =>
                        <option key = {element.id} value = {element.id}>{element.category}</option>
                    )
                }
            </Form.Control>
        </Form.Group>
    )
}


export {
    InputFrom,
    SelectFrom
}
