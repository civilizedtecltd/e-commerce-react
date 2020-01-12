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
function SelectFrom({ LabelTitle, category, callback }) {
    const state = window.localStorage.getItem('state')
    const category_id = JSON.parse(state).auth.user.category_id;
     console.log(category_id)
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
            <Form.Control as="select" onChange = {handleOnchange}>
                <option defaultValue={"Select Category"}> Select Category </option>
                {
                    (category === undefined ) ? [] : category.map((element, index) =>(category_id===element.id) ?(<option selected 
                        key = {index}
                        id={index}
                        value = {element.id}>
                            { element.category }
                        </option>) :(<option 
                        key = {index}
                        id={index}
                        value = {element.id}>
                            { element.category }
                        </option> )
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
