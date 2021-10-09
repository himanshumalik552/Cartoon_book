import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  // const url = "https://api.sampleapis.com/futurama/characters"
  const [data, setData] = useState([]);

  // const getUserName = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //     console.log(data);
  //     setChar(data)
  // };
  // getUserName();
  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/futurama/characters")
      .then((res) => {
        setData(res.data);
        console.log("response of api", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <section className="wrapper">
        <div className="container-xxl m-auto">
          <div className="row">
            {data.map((val, idx) => {
              return(
              <Card
                id={idx}
                first={val.name.first}
                last={val.name.last}
                  middle={val.name.middle}
                  age={ val.age}
                image={val.images.main}
                gender={val.gender}
                species={val.species}
                homePlanet={val.homePlanet}
                occupation={val.occupation}
              />)
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
