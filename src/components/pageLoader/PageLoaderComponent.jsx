import React from "react";
import '../../assets/css/pageLoader.css';
import LoadingPage from '../../assets/images/loading.gif';
const PageLoader = (props) => {

    return (
        (!props.loading) ? <></> :  <div className="Page-loader">
            <img src={LoadingPage} alt="No Image"/>
        </div>
    )
}
export default PageLoader;

