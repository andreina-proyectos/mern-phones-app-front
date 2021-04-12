import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Card, Icon, Image, Label } from 'semantic-ui-react';
import CardComponent from '../../shared/components/Card';
import ErrorMessage from '../../shared/components/ErrorMessage';
import Footer from '../../shared/components/Footer';
import LoaderSpinner from '../../shared/components/LoaderSpinner';
import Header from '../../shared/navigation/Header';
import './PhoneDetailView.scss'

const PhoneDetailView = () => {

  
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState();
    // const [loadedPhone, setLoadedPhone] = useState();

   
    //     const fetchPhone = async () => {
    //         setIsLoading(true);
    //        try {
    //         const response = await fetch(`http://localhost:8000/phones/${phoneId}`);
    //         const responsePhoneData = await response.json();
    //         console.log("responsePhoneData ==>", responsePhoneData);
    
    //         if(!response.ok) {
    //             throw new Error(responsePhoneData.message);
    //         }
    
    //         setLoadedPhone(responsePhoneData);
    //         setIsLoading(false);
    
    //         } catch(error) {
    //             setIsLoading(false);
    //             setError(error.message)
    //         }
    //     }
    //     fetchPhone();

    const [loadedPhone, setLoadedPhone] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    // console.log("phoneId ==>", phoneId);
    // debugger
    
    const { phoneId } = useParams();
  
    //     const sendRequest = async () => {
    //         setIsLoading(true);
    //         debugger
    //        try {
    //         const response = await fetch(`http://localhost:8000/phones/${phoneId}`);
    //         const responsePhonesData = await response.json();
    
    //         if(!response.ok) {
    //             throw new Error(responsePhonesData.message);
    //         }
    
    //         setLoadedPhones(responsePhonesData);
    //         // setIsLoading(false);
          
    
    //         } catch(error) {
    //             setIsLoading(false);
    //             setError(error.message)
    //         }
    //     }

    //     sendRequest()


    useEffect(() => {
        const fetchPhones = async () => {
            setIsLoading(true);
          try {
            const responseData = await fetch(
                `http://localhost:8000/phones/${phoneId}`
            );

            const responseDataJson = await responseData.json().then(
                (res) => {
                    setIsLoading(false);
                    setLoadedPhone(res);
                    console.log("res ====>", res);

                     console.log("loadedPhone ------------", loadedPhone);
                 
                }
            );
        
          } catch (err) {
            setIsLoading(false);
          }
        };

        fetchPhones();
      }, [ phoneId]);

    //  const { name, manufacturer, description, color, price, imageFileName, screen, resolution, processor, ram, weight, memory, cam } = loadedPhoneData;
    
    return (
        <>
            <h1>PHONE DETAIL VIEW!</h1>
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
                        {loadedPhone.name}
                      </Label>
                <Image src={loadedPhone.imageFileName} wrapped ui={false} alt={loadedPhone.manufacturer} />
       
                    <Card.Meta>
                    <Label color='purple' horizontal>
                    {loadedPhone.price}
                  </Label>
                  <Label as='a' color='yellow'>
                
                  {loadedPhone.manufacturer}
                  <Label.Detail>Manufacturer</Label.Detail>
                </Label>
                       
                    </Card.Meta>
                    <Card.Description>
                        {loadedPhone.description}
                    </Card.Description>
                    </Card.Content>

                    <Card.Content>
                    <Card.Description>
                    {loadedPhone.color}
                </Card.Description>
                </Card.Content>


                    <Card.Content extra>
                        <div className="phone-list__extra-wrapper">
                            <div className="phone-list__icon-group">
                                <Icon name='crop' />
                                <span>{`${loadedPhone.screen} "`}</span>
                            </div>

                            <div className="phone-list__icon-group">
                                <Icon name='camera' />
                                <span>{`${loadedPhone.cam}`}</span>
                            </div>

                            <div className="phone-list__icon-group">
                                <Icon name='microchip' />
                                <span>{`${loadedPhone.memory}`}</span>
                            </div>
                            <div className="phone-list__icon-group">
                                <Icon name='weight' />
                                <span>{`${loadedPhone.weight}`}</span>
                            </div>
                            <div className="phone-list__icon-group">
                                <Icon name='compress' />
                                <span>{`${loadedPhone.resolution}`}</span>
                            </div>
                            <div className="phone-list__icon-group">
                                <Icon name='hubspot' />
                                <span>{`${loadedPhone.processor}`}</span>
                            </div>
                            <div className="phone-list__icon-group">
                                <Icon name='window restore outline' />
                                <span>{`${loadedPhone.ram} RAM`}</span>
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