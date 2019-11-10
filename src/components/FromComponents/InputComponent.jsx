import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';


//Input From Components

function InputFrom({ LabelId, TypeName, LabelTitle, Name, Value, Placeholder, controlId, ClassName, callback }) {
    const handleOnchange = event => {
        let data = {
            [event.target.name] : event.target.value
        }
        callback(data)
    }
    return (
        <Form.Group controlId={controlId} className={ClassName}>
            <Form.Label htmlFor={LabelId}>{LabelTitle}</Form.Label>
            <Form.Control type={TypeName} id={LabelId} name={Name} defaultValue={Value} placeholder={Placeholder} onChange = {handleOnchange} />
        </Form.Group>
    )
}

//Select From Components
function SelectFrom({ LabelTitle, controlId, category, callback }) {

    useEffect(() => {

        selectBorderAlert();
    });

    const selectBorderAlert = () => {

        const selectCategory = document.getElementById('category');

        const redBorder = "border: 1px solid #d82626";
        const grayBorder = "border: 1px solid #999999;";

        (selectCategory.value === "Select Category") ? selectCategory.style = redBorder : selectCategory.style = grayBorder;
    }

    const handleOnchange = (event) => {

        selectBorderAlert();

        callback({
            category_id: event.target.value
        });
    }

    return (
        <Form.Group controlId={controlId}>
            <Form.Label> {LabelTitle} </Form.Label>
            <Form.Control as="select" id="category" onChange = {handleOnchange}>
                        <option defaultValue="" >Select Category</option>
                {
                    category.map((element) =>
                        <option key = {element.id} value = {element.id}>{ element.category }</option>
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
