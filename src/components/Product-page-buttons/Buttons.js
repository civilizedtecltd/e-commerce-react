import React, { useState } from "react";

const Buttons = ({ item }) => {
    const { text, name, icon, price } = item;
    const [available, setAvailable] = useState(false);
    return (
        <article>
            <p className={`${available ? "available show" : "available"}`}>
                {text}
            </p>
            <button
                className="btn"
                onMouseEnter={() => setAvailable(true)}
                onMouseLeave={() => setAvailable(false)}
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
