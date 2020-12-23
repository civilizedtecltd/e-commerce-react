import React, { useState, useRef, useEffect } from "react";
import { Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { URL } from '../../constants/config';
import { ProductCarouselImg } from '../../inc/product/ImgCarousel';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import '../../pages/assets/product.css';

function ImageCarousel(props) {

    let [count] = useState(0);
    const [hidden, setHidden] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [images, setImages] = useState([]);
    const [coverImages, setCoverImage] = useState('');
    let ImgHandler = e => { setCoverImage(e.target.src) };

    useRef(() => {
        if (count === 3) {
            count = 3
        }
    });

    useEffect(() => {
        if (props.images) {
            const images = [];

            if (props.images.img_1 !== undefined)
                images.push(`${props.images.img_1}`);
            if (props.images.img_2 !== undefined)
                images.push(`${props.images.img_2}`);
            if (props.images.img_3 !== undefined)
                images.push(`${props.images.img_3}`);

            setImages([...images]);
            setCoverImage(images[0]);
        }
    }, [props.images]);

    const image = { index: 0 }

    const NextPhoto = () => {
        if (image.index < images.length - 1) {

            const SingleImage = document.getElementById('photo');

            image.index += 1;

            if (image.index >= 3) image.index = 2

            SingleImage.src = images[image.index]
        }
    }
    const PrevPhoto = () => {
        const SingleImage = document.getElementById('photo');

        image.index -= 1

        if (image.index === -1 || image.index < 0) image.index = 0;

        SingleImage.src = images[image.index]
    }

    return (<>


        <div className="row productImageGallery">
            <LazyLoad once={true} height={200}>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="productGallery">
                            {
                                images.map((item, index) =>
                                    <div key={index} className="singleItem bgGray p-2 mb-2">
                                        <img loading="lazy" src={item} alt="img" onClick={ImgHandler} className="CursorPointerProduct" />
                                    </div>)
                            }
                        </div>
                    </div>
                    {/* {console.log(ProductCarouselImg[0])} */}
                    <div className="col-sm-9">
                        <div className="productSingleView bgGray p-3 text-center">
                            <span onClick={() => setHidden(true)} > <i className="fas fa-expand-arrows-alt Modal CursorPointerProduct"></i></span>
                            <Image src={coverImages} id={"photo"} alt="image" />
                            <div className="mt-3">
                                <span className="mr-5 CursorPointerProduct" onClick={() => PrevPhoto()} ><i className="fas fa-arrow-left fa-2x"></i></span>
                                <span className="ml-5 CursorPointerProduct" onClick={() => NextPhoto()} ><i className="fas fa-arrow-right fa-2x"></i></span>
                            </div>
                        </div>
    
                    </div>
                </div>
            </LazyLoad>
        </div>
        <div>
            {hidden && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + ProductCarouselImg.length - 1) % images.length]}
                    onCloseRequest={() => setHidden(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex(photoIndex + images.length - 1 % images.length)
                    }
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </div>
    </>
    );

}


export { ImageCarousel }
