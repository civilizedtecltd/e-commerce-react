import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ForYou = ({ data }) => {
  const data1 = [
    {
      img:
        'https://static-01.daraz.com.bd/p/0a926044688596b6598d9ba384fb8383.jpg_200x200q75-product.jpg_.webp',
      desc: 'Fashionable stitched long kurti for women',
      price: 't 3300',
      discount: 't 40000',
    },
    {
      img:
        'https://static-01.daraz.com.bd/p/3af5c83ee1c2c6503a8b54ac0450721c.jpg_200x200q75-product.jpg_.webp',
      desc: 'High quality battery',
      price: 't 3300',
      discount: 't 40000',
    },
    {
      img:
        'https://static-01.daraz.com.bd/p/0a926044688596b6598d9ba384fb8383.jpg_200x200q75-product.jpg_.webp',
      desc: 'High quality battery',
      price: 't 3300',
      discount: 't 40000',
    },
    {
      img:
        'https://static-01.daraz.com.bd/p/0a926044688596b6598d9ba384fb8383.jpg_200x200q75-product.jpg_.webp',
      desc: 'High quality battery',
      price: 't 3300',
      discount: 't 40000',
    },
    {
      img:
        'https://static-01.daraz.com.bd/p/0a926044688596b6598d9ba384fb8383.jpg_200x200q75-product.jpg_.webp',
      desc: 'High quality battery',
      price: 't 3300',
      discount: 't 40000',
    },
  ];
  return (
    <Wrapper>
      <h4>Just For you</h4>

      <div className='wrapper'>
        {data &&
          data.map((item, index) => {
            const { cover_images, name, price } = item;
            return (
              <Link to={`/product/${item.id}`} key={index}>
                <div className='single-card'>
                  <div className='img-container'>
                    <img src={cover_images.img_1} alt='product image' />
                  </div>
                  <div className='footer'>
                    <p className='desc'>{name}</p>
                    <span className='span'>
                      <p className='price'>Ksh {price}</p>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-top: 1rem;
  margin-bottom: 2rem;
  h4 {
    margin-bottom: 1rem;
    padding-left: 1.4rem;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0 1rem;
    @media (max-width: 1150px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
  }
  .single-card {
    transition: transform 0.2s;
    cursor: pointer;
    height: 320px;
    width: 190px;
    -webkit-box-shadow: 2px 2px 10px -3px rgba(0, 0, 0, 0.55);
    box-shadow: 2px 2px 10px -3px rgba(0, 0, 0, 0.55);
    .img-container {
      height: 200px;
      width: 100%;
    }

    .img-container img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .footer {
      padding: 0.5rem;

      p {
        text-transform: capitalize;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
      }
      .desc {
        height: 50px;
      }
      .price {
        margin-top: 1.5rem;
        color: #f88824;
        font-size: 20px;
      }
      .discount {
        color: #9e9e9e;
        margin-top: 0.2rem;
      }
    }
    .span {
      margin-top: 2rem;
    }
  }
  .single-card:hover {
    transform: scale(1.02);
  }
`;
export default ForYou;
