import React from 'react';
import { Form } from 'react-bootstrap';

function InputFrom ({ LabelId, TypeName, LabelTitle, Name, Value, Placeholder, ClassName, handleOnchange }) {
    return (
        <Form.Group className = {ClassName}>
            <Form.Label htmlFor = {LabelId} > {LabelTitle} </Form.Label>
            <Form.Control type = {TypeName} id = {LabelId} name={Name} value={Value || ''} placeholder={Placeholder} onChange = {handleOnchange} />
        </Form.Group>
    )
}

//Select From Components
function SelectFrom({ LabelTitle, Value, categories, handleOnchange}) {
    return (
        <Form.Group>
            <Form.Label> {LabelTitle} </Form.Label>
            <Form.Control name="category_id" as="select" value={Value} onChange={handleOnchange}>
                    <option value = {0}> Select Category </option>
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
