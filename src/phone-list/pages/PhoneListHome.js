import React, { useEffect, useState } from "react";
import ErrorMessage from "../../shared/components/ErrorMessage";
import Footer from "../../shared/components/Footer/Footer";
import LoaderSpinner from "../../shared/components/LoaderSpinner";
import Header from "../../shared/navigation/Header";
import PhoneList from "../components/PhoneList/PhoneList";

const PhoneListHome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedPhones, setLoadedPhones] = useState();

  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/phones");
      const responsePhonesData = await response.json();

      if (!response.ok) {
        throw new Error(responsePhonesData.message);
      }

      setLoadedPhones(responsePhonesData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <React.Fragment>
      <Header />
      {isLoading && <LoaderSpinner isFromHome />}

      {error && <ErrorMessage textMessage={error} />}

      {!isLoading && loadedPhones && <PhoneList items={loadedPhones} />}

      <Footer />
    </React.Fragment>
  );
};

export default PhoneListHome;
