import React from "react";
import PhoneItem from "./PhoneItem";
import "./PhoneList.scss";

const PhoneList = (props) => {
  if (props.items.lenght === 0) {
    return (
      <div className="center">
        <h2>No phones found</h2>
      </div>
    );
  }

  return (
    <ul className="home__phone-list main">
      {props.items.map(
        ({
          id,
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
        }) => (
          <PhoneItem
            key={id}
            id={id}
            name={name}
            manufacturer={manufacturer}
            description={description}
            color={color}
            price={price}
            imageFileName={imageFileName}
            screen={screen}
            resolution={resolution}
            processor={processor}
            ram={ram}
            weight={weight}
            memory={memory}
            cam={cam}
          />
        )
      )}
    </ul>
  );
};

export default PhoneList;
