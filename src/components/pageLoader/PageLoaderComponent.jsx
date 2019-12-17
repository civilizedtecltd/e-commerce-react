import React from "react";
import '../../assets/css/pageLoader.css';
import LoadingPage from '../../assets/images/loading.gif';
import Image from 'react-bootstrap/Image'
const PageLoader = (props) => {

    return (
        (!props.loading) ? <></> :  <div className="Page-loader">
            <Image src={LoadingPage} alt="loading....."/>
        </div>
    )
}
export default PageLoader;

