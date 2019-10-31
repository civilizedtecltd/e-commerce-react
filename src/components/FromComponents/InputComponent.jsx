import React, { useEffect } from 'react';
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

        const redBorder = "border: 1px solid #d82626";
        const grayBorder = "border: 1px solid #999999;";

        (event.target.value !== "Select Category") ? event.target.style = grayBorder : event.target.style = redBorder;

        callback({
            category_id: event.target.value
        });
    }

    useEffect(() => {

        const selectCategory = document.getElementById('category');

        const redBorder = "border: 1px solid #d82626";
        const grayBorder = "border: 1px solid #999999;";

        (selectCategory.value === "Select Category") ? selectCategory.style = redBorder : selectCategory.style = grayBorder;
    });

    return (
        <Form.Group controlId={controlId}>
            <Form.Label> {LableTitle} </Form.Label>
            <Form.Control as="select" id="category" onChange = {handleOnchange}>
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
