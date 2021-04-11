import React from 'react';

const PhoneItem = props => {
const {id, name, manufacturer, description, color, price, imageFileName, screen, resolution, processor, ram, weight, memory, cam} = props;
    return (
        <li className="phone-list__item">
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{manufacturer}</li>
                <li>{description}</li>
                <li>{color}</li>
                <li>{price}</li>
                <img src={imageFileName} alt={name} />
                <li>{screen}</li>
                <li>{resolution}</li>
                <li>{processor}</li>
                <li>{ram}</li>
                <li>{weight}</li>
                <li>{memory}</li>
                <li>{cam}</li>
            </ul>
        </li>
    )
}

export default PhoneItem;