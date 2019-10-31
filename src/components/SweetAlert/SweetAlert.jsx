import React from 'react';
import Swal from 'sweetalert2'

const SweetAlert = (props) => {
    return (
        Swal.fire(messageReact, props.message, props.messageType)
    );
}

export default SweetAlert;