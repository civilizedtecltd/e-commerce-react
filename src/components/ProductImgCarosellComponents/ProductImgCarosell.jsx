import React, {useState} from "react";
import {ProductCarosellImg} from '../../inc/product/ImgCarosell';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import {Button} from "react-bootstrap";


function ImageCarrosull(){
    const [hidden, setHidden] = useState(false);
    const [photoIndex,setPhotoIndex] =useState(0);
    let [result1, setResult1] = useState(ProductCarosellImg[0]);
    let ImgHandler = e =>{
        setResult1(e.target.src);
    };


    return (<>


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
                        <span onClick={()=>setHidden( true )}><i className="fas fa-expand-arrows-alt Modal"></i></span>
                        <img src= {result1} alt=""/>
                        <div className="mt-3">
                            <span className="mr-5"  ><i className="fas fa-arrow-left fa-2x"></i></span>
                            <span className="ml-5"  ><i className="fas fa-arrow-right fa-2x"></i></span>
                        </div>
                    </div>

                </div>

            </div>
        <div>
            {hidden && (
                <Lightbox
                    mainSrc={ProductCarosellImg[photoIndex]}
                    nextSrc={ProductCarosellImg[(photoIndex + 1) % ProductCarosellImg.length]}
                    prevSrc={ProductCarosellImg[(photoIndex + ProductCarosellImg.length - 1) % ProductCarosellImg.length]}
                    onCloseRequest={() => setHidden(false )}
                    onMovePrevRequest={() =>
                        setPhotoIndex(photoIndex + ProductCarosellImg.length - 1 % ProductCarosellImg.length)
                    }
                    onMoveNextRequest={() =>setPhotoIndex((photoIndex + 1) % ProductCarosellImg.length)
                    }
                />
            )}
        </div>
        </>
    );

}


export {
    ImageCarrosull
}
