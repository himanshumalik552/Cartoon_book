import React from "react";

const Card = (props) => {
  // const props = {
  //   id: 1,
  //   name: {
  //     first: " First",
  //     middle: " Middle",
  //     last: " Leela",
  //   },
  //   image: {
  //     main: "https://upload.wikimedia.org/wikipedia/en/2/28/Philip_Fry.png",
  //   },
  //   gender: " Male",
  //   species: " Human",
  //   homePlanet: " Earth",
  //   occupation: " Intergalactic Delivery Boy",
  //   age: " 25",
  // };
  return (
    <>
      <div className="col col-lg-3 col-md-6 col-xs-12  display-flex justify-content-center align-item-center ">     
          <div className="card  ">
            <div className="image display-flex justify-content-center">
              <img src={props.image} alt={props.first} />
            </div>
            <div className="text py-12 ">
              <p className=" p ">
                Name : <span className="p-med">{props.first}</span>
                <span className="p-med">{props.middle}</span>
                <span className="p-med">{props.last}</span>
              </p>
              <p className="p ">
                Gender : <span className="p-med">{props.gender}</span>
              </p>
              <p className="p  ">
                age : <span className="p-med">{props.age}</span>
              </p>
              <p className="p  ">
                species : <span className="p-med">{props.species}</span>
              </p>
              <p className="p ">
                homePlanet :<span className="p-med">{props.homePlanet}</span>
              </p>
              <p className="p ">
                occupation :<span className="p-med">{props.occupation}</span>
              </p>
            </div>
          </div>
      </div>
    </>
  );
};

export default Card;
