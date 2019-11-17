import React,{ useState } from 'react';
import {Form} from 'react-bootstrap'
function CheckboxComponent(props) {
    const [isCheck , setCheck] = useState(false)
    const handleCheck = () => {setCheck(!isCheck)}
    return (
        <Form.Check
        custom
        className={props.classNames}
        onClick={handleCheck}
        type={props.type}
        id={props.id}
        label={props.label}
        defaultChecked={isCheck}       
/>
    )
}

export default CheckboxComponent;