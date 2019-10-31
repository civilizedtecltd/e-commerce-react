import React, {useState,useEffect} from "react";
import {Image} from 'react-bootstrap';
import {ProductCarouselImg} from '../../inc/product/ImgCarousel';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


function ImageCarousel(){
    const [hidden, setHidden] = useState(false);
    const [photoIndex,setPhotoIndex] =useState(0);
    let [result1, setResult1] = useState(ProductCarouselImg[0]);
    let ImgHandler = e =>{setResult1(e.target.src);};
    var [count,setCount]=useState(0)

    useEffect(()=>{
        if(count===3){
            count=3
          }
    })

    const image={index:0}

    const NextPhoto=()=>{
       const SingleImage=document.getElementById('photo');
       image.index +=1;
       if(image.index>=3) image.index=2 
       SingleImage.src=ProductCarouselImg[image.index]
    //    console.log(image.index)
    }
    const PrevPhoto=()=>{
        const SingleImage=document.getElementById('photo');
        image.index-=1
        if(image.index===-1 || image.index<0) image.index=0;
        SingleImage.src=ProductCarouselImg[image.index] 
        // console.log(image.index)
    }

    return (<>


            <div className="row productImageGallery">
                <div className="col-sm-3">
                    <div className="productGallery">

                        {ProductCarouselImg.map((item, index)=>
                            <div key={index} className="singleItem bgGray p-2 mb-2">
                                <img  src={item} alt="" onClick={ImgHandler}/>
                            </div>

                        )}

                    </div>
                </div>
                {/* {console.log(ProductCarouselImg[0])} */}
                <div className="col-sm-9">
                    <div className="productSingleView bgGray p-3 text-center">
                        <span onClick={()=>setHidden( true )}><i className="fas fa-expand-arrows-alt Modal"></i></span>
                        <Image src= {result1} id={"photo"} alt="image"/>
                        <div className="mt-3">
                            <span className="mr-5" onClick={()=>PrevPhoto()} ><i className="fas fa-arrow-left fa-2x"></i></span>
                            <span className="ml-5" onClick={()=>NextPhoto()} ><i className="fas fa-arrow-right fa-2x"></i></span>
                        </div>
                    </div>

                </div>

            </div>
        <div>
            {hidden && (
                <Lightbox
                    mainSrc={ProductCarouselImg[photoIndex]}
                    nextSrc={ProductCarouselImg[(photoIndex + 1) % ProductCarouselImg.length]}
                    prevSrc={ProductCarouselImg[(photoIndex + ProductCarouselImg.length - 1) % ProductCarouselImg.length]}
                    onCloseRequest={() => setHidden(false )}
                    onMovePrevRequest={() =>
                        setPhotoIndex(photoIndex + ProductCarouselImg.length - 1 % ProductCarouselImg.length)
                    }
                    onMoveNextRequest={() =>setPhotoIndex((photoIndex + 1) % ProductCarouselImg.length)
                    }
                />
            )}
        </div>
        </>
    );

}


export {
    ImageCarousel
}
