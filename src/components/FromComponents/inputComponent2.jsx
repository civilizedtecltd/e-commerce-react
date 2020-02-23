import React, { useState, useEffect, useCallback } from 'react';
import { Form } from 'react-bootstrap';

function InputFrom({ LabelId, TypeName, LabelTitle, Name, Value, Placeholder, ClassName, handleOnchange }) {

    return (
        <Form.Group className={ClassName}>
            <Form.Label htmlFor={LabelId} > {LabelTitle} </Form.Label>
            <Form.Control type={TypeName} id={LabelId} name={Name} value={Value} placeholder={Placeholder} onChange={handleOnchange} />
        </Form.Group>
    )
}

//Select From Components
function SelectFrom({ LabelTitle, Name, Value, categories, handleOnchange }) {

    // const [categoryId, setCategoryId] = useState(0);

    // useEffect(()=>{
    //     const state = JSON.parse(window.localStorage.getItem('state'));
    //     const category_id = (state !== null && state.auth.user.category_id) ? state.auth.user.category_id : 0;
    //     setCategoryId(category_id);
    // },[]);

    // const handleOnchange = (event) => {
    //     event.preventDefault();
    //     setCategoryId(Number(event.target.value));
    //     callback({
    //         category_id: event.target.value
    //     });
    //     return ((event.target.value === 'Select Category') ? (event.target.style.borderColor='rgb(255,0,97)') : event.target.style.borderColor='');
    // }

    return (
        <Form.Group>
            <Form.Label> {LabelTitle} </Form.Label>
            <Form.Control as="select" value={Value} name={Name} onChange={handleOnchange}>
                <option value={0}> Select Category </option>
                {(categories === undefined) ? [] : categories.map((element, index) => (
                    <option
                        key={index}
                        id={index}
                        value={element.id}
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
