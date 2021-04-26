import React, { useState, useRef, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

import { ProductCarouselImg } from './../inc/product/ImgCarousel';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './../pages/assets/product.css';
import styled from 'styled-components';

const ReactImageCarosule = (props) => {
  let [count] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [coverImages, setCoverImage] = useState('');
  let ImgHandler = (e) => {
    setCoverImage(e.target.src);
  };

  useRef(() => {
    if (count === 3) {
      count = 3;
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

  const image = { index: 0 };

  const NextPhoto = () => {
    if (image.index < images.length - 1) {
      const SingleImage = document.getElementById('photo');

      image.index += 1;

      if (image.index >= 3) image.index = 2;

      SingleImage.src = images[image.index];
    }
  };
  const PrevPhoto = () => {
    const SingleImage = document.getElementById('photo');

    image.index -= 1;

    if (image.index === -1 || image.index < 0) image.index = 0;

    SingleImage.src = images[image.index];
  };

  return (
    <>
      <div className='row productImageGallery'>
        <LazyLoad once={true}>
          <Wrapper>
            <div className='container-img'>
              <span className='zoom' onClick={() => setHidden(true)}>
                <i className='fas fa-expand-arrows-alt Modal CursorPointerProduct'></i>
              </span>
              <Image src={coverImages} id={'photo'} alt='image' />
              <div className='next-prev-btn'>
                <span className='arrow left-arrow ' onClick={() => PrevPhoto()}>
                  <i className='fas fa-arrow-left fa-2x'></i>
                </span>
                <span className='arrow right-arrow' onClick={() => NextPhoto()}>
                  <i className='fas fa-arrow-right fa-2x'></i>
                </span>
              </div>
            </div>
          </Wrapper>
        </LazyLoad>
      </div>
      <div>
        {hidden && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={
              images[
                (photoIndex + ProductCarouselImg.length - 1) % images.length
              ]
            }
            onCloseRequest={() => setHidden(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(photoIndex + images.length - (1 % images.length))
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
      </div>
      <Thumbnails>
        <div className='thumbnails'>
          {images.map((item, index) => (
            <div key={index} className='singleimg'>
              <img loading='lazy' src={item} alt='img' onClick={ImgHandler} />
            </div>
          ))}
        </div>
      </Thumbnails>
    </>
  );
};

const Wrapper = styled.div`
  .container-img {
    position: relative;
  }
  .zoom {
    position: absolute;
    top: 0%;
    right: 0%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .next-prev-btn {
    cursor: pointer;
    color: #fff;
  }
  .arrow {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem;
    font-size: 7px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .left-arrow {
    left: 0;
  }
  .right-arrow {
    right: 0;
  }
`;
const Thumbnails = styled.div`
  .thumbnails {
    display: flex;
    gap: 0.6rem;
    margin-top: 1rem;
    /* flex-wrap: wrap; */
  }

  .singleimg img {
    height: 50px;
    width: 50px !important;
    object-fit: cover;
    cursor: pointer;
  }
`;

export default ReactImageCarosule;
