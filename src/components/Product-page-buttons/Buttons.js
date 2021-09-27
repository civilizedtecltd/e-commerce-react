import React, { useState } from 'react';
import styled from 'styled-components';

const Buttons = ({ item, message, setMessage }) => {
  const { text, name, icon, price, sale_price } = item;
  const [available, setAvailable] = useState(false);

  const handleClick = (name) => {
    if (name === 'audio book') {
      setMessage({ pdf: false, hardCover: false, ePub: false, audio: true, text });
    }
    if (name === 'e pub') {
      setMessage({ pdf: false, hardCover: false, ePub: true, audio: false, text });
    }
    if (name === 'hard cover') {
      setMessage({ pdf: false, hardCover: true, ePub: false, audio: false, text });
    }
    if (name === 'pdf') {
      setMessage({ pdf: true, hardCover: false, ePub: false, audio: false, text });
    }
  };

  return (
    <article>
      <p className={`${available ? 'available show' : 'available'}`}>{text}</p>
      <BookOption
        className='btn'
        onMouseEnter={() => setAvailable(true)}
        onMouseLeave={() => setAvailable(false)}
        onClick={() => handleClick(name)}
      >
        {icon}
        <span>
          <p>{name}</p>
          {(sale_price && price > sale_price ? <p><span className="regular-price">Ksh {price}</span> <span>ksh {sale_price}</span> </p>  : <p>Ksh {price}</p>)}          
        </span>
      </BookOption>
    </article>
  );
};

const BookOption = styled.button`
  .regular-price{
    text-decoration: line-through;
  }
`;

export default Buttons;


/* 
<div className="book_selection mt-1">
                        <ul className="book_selectitem">
                          <li className="bookswatch-element unselected">
                            <a href="/home">
                              <span className="book-swtitle">Hardcover</span>
                              <span className="book-swprice">Ksh 20</span> 
                              <span className="book-swprice book-swprice-offer">Ksh 10</span>
                            </a>
                          </li>
                          <li className="bookswatch-element selected">
                            <a href="/home">
                              <span className="book-swtitle">Paperback</span>
                              <span className="book-swprice">Ksh 90</span> 
                            </a>
                          </li>
                        </ul>
                      </div>

*/
