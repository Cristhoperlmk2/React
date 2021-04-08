import React, { useEffect } from "react";
import Card from "./Pais";
import { useSelector, useDispatch } from "react-redux";
import si from "./Card.module.css";

function Regiones(props) {
  const dispactch = useDispatch();
  const regiones = useSelector((state) => state.region);
  const region = props.match.params.region
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      .then((data) => data.json())
      .then((respuesta) => {
        dispactch({
          type: "GET_REGION",
          payload: respuesta,
        });
        console.log(respuesta.length);
      })
      .catch(() => {
        console.log("ERROR ");
      });
  }, [dispactch,region]);

  return (
    <div className={si.wrapper}>
      {regiones.map(({ name, flag, population, region, capital }) => {
        return (
          <Card
            img={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
            key={name}
          />
        );
      })}
    </div>
  );
}

export default Regiones;
