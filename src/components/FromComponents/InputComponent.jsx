import React from 'react';
import { Form } from 'react-bootstrap';

//Input From Components



function InputFrom({ LabelId, TypeName, LabelTitle, Name, Value, Placeholder, controlId, ClassName, callback }) {
    const handleOnchange = event => {
        let data = {
            name : Name,
            value: event.target.value
        }
        callback(data)
    }
    return (
        <Form.Group controlId = {controlId} className = {ClassName}>
            <Form.Label htmlFor = {LabelId}> {LabelTitle} </Form.Label>
            <Form.Control type={TypeName} id={LabelId} name={Name} defaultValue={Value} placeholder={Placeholder} onChange = {handleOnchange} />
        </Form.Group>
    )
}

//Select From Components
function SelectFrom({ LabelTitle, controlId, category }) {
    return (
        <Form.Group controlId = {controlId}>
            <Form.Label>{ LabelTitle}</Form.Label>
            <Form.Control as="select">
                {
                    category.map((value) =>
                        <option key = {value.id}>{value.category}</option>
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