import React from 'react';
import './card.css'

const Card = props => {
const {className, style, children} = props;
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
}

export default Card;