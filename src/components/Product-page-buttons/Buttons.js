import React, { useState } from 'react';

const Buttons = ({ item, message, setMessage }) => {
  const { text, name, icon, price } = item;
  const [available, setAvailable] = useState(false);
  const handleClick = (name) => {
    if (name === 'audio book') {
      setMessage({ pdf: false, hardCover: false, ePub: false, audio: true });
    }
    if (name === 'e pub') {
      setMessage({ pdf: false, hardCover: false, ePub: true, audio: false });
    }
    if (name === 'hard cover') {
      setMessage({ pdf: false, hardCover: true, ePub: false, audio: false });
    }
    if (name === 'pdf') {
      setMessage({ pdf: true, hardCover: false, ePub: false, audio: false });
    }
  };
  return (
    <article>
      <p className={`${available ? 'available show' : 'available'}`}>{text}</p>
      <button
        className='btn'
        onMouseEnter={() => setAvailable(true)}
        onMouseLeave={() => setAvailable(false)}
        onClick={() => handleClick(name)}
      >
        {icon}
        <span>
          <p>{name}</p>
          <p>{price}</p>
        </span>
      </button>
    </article>
  );
};

export default Buttons;
