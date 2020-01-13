import React from 'react';
import { Form } from 'react-bootstrap';

function InputFrom ({ LabelId, TypeName, LabelTitle, Name, Value, Placeholder, ClassName, callback }) {

    const handleOnchange = event => {
        let data = {
            [event.target.name] : event.target.value
        }
        callback(data)
    }

    return (
        <Form.Group className = {ClassName}>
            <Form.Label htmlFor = {LabelId} > {LabelTitle} </Form.Label>
            <Form.Control type = {TypeName} id = {LabelId} name={Name} value={Value} placeholder={Placeholder} onChange = {handleOnchange} />
        </Form.Group>
    )
}

//Select From Components
function SelectFrom({ LabelTitle, categories, callback }) {

    const state = JSON.parse(window.localStorage.getItem('state'));
    const category_id = (state !== null && state.auth.user.category_id) ? state.auth.user.category_id : 0;

    const handleOnchange = (event) => {
        event.preventDefault();

        callback({
            category_id: event.target.value
        });
        return ((event.target.value === 'Select Category') ? (event.target.style.borderColor='rgb(216, 38, 38)') : event.target.style.borderColor='');
    }

    return (
        <Form.Group>
            <Form.Label> {LabelTitle} </Form.Label>
            <Form.Control as="select" value={category_id} onChange = {handleOnchange}>
                    <option value = {0}>Select Category</option>
                    {(categories === undefined) ? [] : categories.map((element, index) => (
                        <option
                            key = {index}
                            id = {index}
                            value = {element.id}
                        >
                            {element.category}
                        </option>
                    ))}
            </Form.Control>
      </Form.Group>
     )
 }


export {
    InputFrom,
    SelectFrom
}
