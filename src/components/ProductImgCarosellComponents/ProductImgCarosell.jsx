import React, {useState} from "react";
import {ProductCarosellImg} from '../../inc/product/ImgCarosell';
function ProductImgCarosell() {
    let [result1, setResult1] = useState(ProductCarosellImg[0]);
    let ImgHandler = e =>{
        setResult1(e.target.src);
    };

    return(
        <div className="row productImageGallery">
            <div className="col-sm-3">
                <div className="productGallery">

                    {ProductCarosellImg.map((CaroImg, index)=>
                        <div className="singleItem bgGray p-2 mb-2">
                            <img src={CaroImg} alt="" onClick={ImgHandler}/>
                        </div>

                    )}

                </div>
            </div>
            {console.log(ProductCarosellImg[0])}
            <div className="col-sm-9">
                <div className="productSingleView bgGray p-3 text-center">
                    <img src= {result1} alt=""/>
                </div>
            </div>
        </div>

    )
}

export default ProductImgCarosell;
