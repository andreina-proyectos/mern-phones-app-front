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

            const responseDataJson = await responseData.json();

             setLoadedPhone(responseDataJson);
             setIsLoading(false);
          } catch (err) {
            setIsLoading(false);
            setError(error.message)
          }
        };

        fetchPhones();
      }, [  ]);
        
         const { name, manufacturer, description, color, price, imageFileName, screen, resolution, processor, ram, weight, memory, cam } = loadedPhone;
      
    
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
                        <p>soy card detail</p>
                       

                        <Card.Content>
                <Image src={imageFileName} wrapped ui={false} alt={name} />
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                    <Label color='purple' horizontal>
                    {price}
                  </Label>
                        <span className='date'></span>
                    </Card.Meta>
                    <Card.Description>
                        {manufacturer}
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