import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Label } from "semantic-ui-react";
import CardComponent from "../../shared/components/Card";
import "./PhoneItem.scss";

const PhoneItem = (props) => {
  const {
    id,
    name,
    manufacturer,
    price,
    imageFileName,
    screen,
    memory,
    cam,
  } = props;
  return (
    <li className="phone-list__item">
      <Link className="phone-list__item-wrapper" to={`/phones/${id}`}>
        <CardComponent className="phone-list__content">
          <Card.Content>
            <Image src={imageFileName} wrapped ui={false} alt={name} />
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <Label color="purple" horizontal>
                {price}
              </Label>
              <span className="date"></span>
            </Card.Meta>
            <Card.Description>{manufacturer}</Card.Description>
          </Card.Content>

          <Card.Content extra>
            <div className="phone-list__extra-wrapper">
              <div className="phone-list__icon-group">
                <Icon name="crop" />
                <span>{`${screen} "`}</span>
              </div>

              <div className="phone-list__icon-group">
                <Icon name="camera" />
                <span>{`${cam}`}</span>
              </div>

              <div className="phone-list__icon-group">
                <Icon name="microchip" />
                <span>{`${memory}`}</span>
              </div>
            </div>
          </Card.Content>
        </CardComponent>
      </Link>
    </li>
  );
};

export default PhoneItem;
