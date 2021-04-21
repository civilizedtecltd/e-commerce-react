import React, { useState } from 'react';

const Buttons = (item) => {
  const { text, name, icon, price } = item;
  const [available, setAvailable] = useState(false);
  return (
    <article>
      <p className={`${available ? 'available show' : 'available'}`}>{text}</p>
      {/* {available && <p>{text}</p>} */}
      <button className='btn' onClick={() => setAvailable(!available)}>
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
