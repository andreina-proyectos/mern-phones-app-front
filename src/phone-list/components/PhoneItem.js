import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react';
import CardComponent from '../../shared/components/Card';

const PhoneItem = props => {
const {id, name, manufacturer, description, color, price, imageFileName, screen, resolution, processor, ram, weight, memory, cam} = props;
    return (
        <li className="phone-list__item">
            <CardComponent className="phone-list__content">
                <Link to={`/`} >
                <Image src={imageFileName} wrapped ui={false} alt={name} />
                <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{price}</span>
                </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
                </Card.Content>

                <Card.Content extra>
                    <Icon name='user' />
                </Card.Content>
                       
                        
             
                </Link>
            </CardComponent>
        </li>
    )
}

export default PhoneItem;