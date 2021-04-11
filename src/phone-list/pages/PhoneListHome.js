import React, { useEffect, useState } from 'react';
import ErrorMessage from '../../shared/components/ErrorMessage';
import LoaderSpinner from '../../shared/components/LoaderSpinner';
import PhoneList from '../components/PhoneList';

const phones = [
    {
        "id":  "3d7584c3-2ae5-4fce-98b8-9b4b9bf9lkjlkjklj",
        "name": "Asus ROG Phone 3 Strix Edition",
        "manufacturer": "Asus",
        "description": "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
        "color": "Black Glare",
        "price": "610 EUR",
        "imageFileName":"https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone3-strix.jpg",
        "screen": "6.59",
        "resolution": "1080 x 2340 px",
        "processor": "Qualcomm Snapdragon 865",
        "ram": "16 GB",
        "weight": "240 g",
        "memory": "512 GB",
        "cam": "64MP"
       },
       {
        "id":  "3d7584c3-2ae5-4fce-98b8-9b4b9bf9jklhkj74",
        "name": "Motorola Edge+",
        "manufacturer": "Motorola",
        "description": "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, barometer",
        "color": "Smokey Sangria, Thunder Grey, Baltic Gray",
        "price": "645 EUR",
        "imageFileName":"https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-plus.jpg",
        "screen": "6.67",
        "resolution": "1080 x 2340 px",
        "processor": "Qualcomm Snapdragon 865",
        "ram": "12 GB",
        "weight": "203 g",
        "memory": "256 GB",
        "cam": "108MP"
       },
       {
        "id":  "3d7584c3-2ae5-4fce-98b8-9b4b9bf945chs",
        "name": "Apple iPhone 11",
        "manufacturer": "Apple",
        "description": "Face ID, accelerometer, gyro, proximity, compass, barometer, Siri natural language commands and dictation, Ultra Wideband (UWB) support",
        "color": "Black, Green, Yellow, Purple, Red, White",
        "price": "569 EUR",
        "imageFileName":"https://cdn-files.kimovil.com/default/0003/49/thumb_248672_default_big.jpeg",
        "screen": "6.1",
        "resolution": "828 x 1792 px",
        "processor": "Apple A13 Bionic",
        "ram": "4 GB",
        "weight": "203 g",
        "memory": "64 GB, 128 GB 256 GB",
        "cam": "12MP"
       },
] 

const PhoneListHome = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedPhones, setLoadedPhones] = useState();


    const sendRequest = async () => {
        setIsLoading(true);
       try {
        const response = await fetch('http://localhost:8000/phones');
        const responsePhonesData = await response.json();

        if(!response.ok) {
            throw new Error(responsePhonesData.message);
        }

        setLoadedPhones(responsePhonesData);
        setIsLoading(false);

        } catch(error) {
            setIsLoading(false);
            setError(error.message)
        }
    }

    useEffect(() => {
        sendRequest();
    }, []);


    return (
        <React.Fragment>
            {isLoading && (
                < LoaderSpinner />
            )}
            {error && <ErrorMessage textMessage={error} />}
            {!isLoading && loadedPhones && <PhoneList items={loadedPhones}/>}
        </React.Fragment>
    )
}

export default PhoneListHome;