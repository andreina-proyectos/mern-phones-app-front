import React from 'react';
import './card.css';
import { Card, Icon, Image } from 'semantic-ui-react'

const CardComponent = props => {
const {className, style, children} = props;
    return (
      <Card className={className} style={style}>
        {children}
      </Card>
    )
}

export default CardComponent;