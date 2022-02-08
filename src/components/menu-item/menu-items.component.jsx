import React from 'react';
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
    <div className="menu-item" style={
        { backgroundImage: `url(${imageUrl})` }
    }
        className={`${size} menu-item`}
    >
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)
export default MenuItem;