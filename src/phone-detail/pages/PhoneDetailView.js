import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Card, Icon, Image, Label, Popup } from 'semantic-ui-react';
import CardComponent from '../../shared/components/Card';
import ErrorMessage from '../../shared/components/ErrorMessage';
import Footer from '../../shared/components/Footer';
import LoaderSpinner from '../../shared/components/LoaderSpinner';
import Header from '../../shared/navigation/Header';
import './PhoneDetailView.scss';
import axios from 'axios';

const PhoneDetailView = () => {


    const [loadedPhone, setLoadedPhone] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
 
    const { phoneId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:8000/phones/${phoneId}`)
        .then(res => {
            console.log(res)
            setLoadedPhone(res.data);
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
            setIsLoading(false);
            setError({"error": "error loading phone" })

        })
    }, [phoneId])

    const { name, manufacturer, description, color, price, imageFileName, screen, resolution, processor, ram, weight, memory, cam } = loadedPhone;
    
    return (
        <>
            <Header />
            {isLoading && (
                < LoaderSpinner />
            )}

            {error && <ErrorMessage textMessage={error} />}
            
            {!isLoading && loadedPhone && 
                <div className="phone-detail__main">
                    <CardComponent className="phone-detail__content">
                        <Card.Content>
                        <Label as='a' color='red' ribbon>
                        {name}
                        </Label>

                        <Image src={imageFileName} wrapped ui={false} alt={manufacturer} />
       
                        <Card.Meta className="phone-detail__meta-info">
                            <Popup content='You can pay in bitcoins!' trigger={   <Label id="label-price" className="phone-detail__label-price" color='purple' horizontal>
                            {price}
                            </Label>}/>
                            <Label as='a' color='yellow'>
                                {manufacturer}
                                <Label.Detail>Manufacturer</Label.Detail>
                            </Label>
                        </Card.Meta>

                    <Card.Description>
                        {description}
                    </Card.Description>
                    </Card.Content>

                    <Card.Content>
                        <Card.Description>
                            {color}
                        </Card.Description>
                    </Card.Content>


                    <Card.Content extra>
                        <div className="phone-list__extra-wrapper">
                            <div className="phone-list__icon-group">
                                <Icon name='crop' />
                                <span>{`${screen} "`}</span>
                            </div>

                            <div className="phone-list__icon-group">
                                <Icon name='camera' />
                                <span>{`${cam}`}</span>
                            </div>

                            <div className="phone-list__icon-group">
                                <Icon name='microchip' />
                                <span>{`${memory}`}</span>
                            </div>
                            <div className="phone-list__icon-group">
                                <Icon name='weight' />
                                <span>{`${weight}`}</span>
                            </div>
                            <div className="phone-list__icon-group">
                                <Icon name='compress' />
                                <span>{`${resolution}`}</span>
                            </div>
                            <div className="phone-list__icon-group">
                                <Icon name='hubspot' />
                                <span>{`${processor}`}</span>
                            </div>
                            <div className="phone-list__icon-group">
                                <Icon name='window restore outline' />
                                <span>{`${ram} RAM`}</span>
                            </div>
                        </div>
                    </Card.Content> 

                    </CardComponent>
                </div>
            }

            <Footer />
        </>
        )
}

export default PhoneDetailView;