import React from 'react'
import {Button} from 'react-bootstrap'

function ButtonComponents({Type, ClassName, Name}) {
    return (
        <Button type={Type} className={ClassName}>{Name}</Button>
    )
}

export {ButtonComponents}
