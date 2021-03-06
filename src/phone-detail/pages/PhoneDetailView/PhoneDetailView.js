import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Card, Icon, Image, Label, Popup } from "semantic-ui-react";
import CardComponent from "../../../shared/components/Card";
import ErrorMessage from "../../../shared/components/ErrorMessage";
import Footer from "../../../shared/components/Footer/Footer";
import LoaderSpinner from "../../../shared/components/LoaderSpinner";
import Header from "../../../shared/navigation/Header/Header";
import "./PhoneDetailView.scss";

const PhoneDetailView = () => {
  const [loadedPhone, setLoadedPhone] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { phoneId } = useParams("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/phones/${phoneId}`)
      .then((res) => {
        setLoadedPhone(res.data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setError("Error 404");
          setIsLoading(false);
        }
        setError(error.response.status);
      });
  }, [phoneId]);

  const {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    resolution,
    processor,
    ram,
    weight,
    memory,
    cam,
  } = loadedPhone;

  return (
    <>
      <Header />
      {isLoading && <LoaderSpinner isFromHome={false} />}

      {error && <ErrorMessage textMessage={error} />}

      {error && <Redirect to="/404" />}

      {!isLoading && loadedPhone && !error && (
        <div className="phone-detail__main">
          <CardComponent className="phone-detail__content">
            <Card.Content>
              <Label as="a" color="red" ribbon>
                {name}
              </Label>

              <Image
                src={imageFileName}
                wrapped
                ui={false}
                alt={manufacturer}
              />

              <Card.Meta className="phone-detail__meta-info">
                <Popup
                  content="You can pay in bitcoins!"
                  trigger={
                    <Label
                      id="label-price"
                      className="phone-detail__label-price"
                      color="purple"
                      horizontal
                    >
                      {price}
                    </Label>
                  }
                />
                <Label as="a" color="yellow">
                  {manufacturer}
                  <Label.Detail>Manufacturer</Label.Detail>
                </Label>
              </Card.Meta>

              <Card.Description>{description}</Card.Description>
            </Card.Content>

            <Card.Content>
              <Card.Description>{color}</Card.Description>
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
                <div className="phone-list__icon-group">
                  <Icon name="weight" />
                  <span>{`${weight}`}</span>
                </div>
                <div className="phone-list__icon-group">
                  <Icon name="compress" />
                  <span>{`${resolution}`}</span>
                </div>
                <div className="phone-list__icon-group">
                  <Icon name="hubspot" />
                  <span>{`${processor}`}</span>
                </div>
                <div className="phone-list__icon-group">
                  <Icon name="window restore outline" />
                  <span>{`${ram} RAM`}</span>
                </div>
              </div>
            </Card.Content>
          </CardComponent>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PhoneDetailView;
