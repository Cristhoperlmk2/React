import React ,{useEffect} from 'react';
import Card from './Pais';
import {useSelector,useDispatch} from 'react-redux';
import si from "./Card.module.css";

function Paises() {
    
    const dispactch = useDispatch()
    const paises = useSelector((state)=> state.regiones)
    useEffect(()=>{  
            fetch(`https://restcountries.eu/rest/v2/all`)
            .then(data=> data.json())
            .then(respuesta =>{
                dispactch({
                    type:"GET_REGIONES",payload:respuesta
                })
                console.log(respuesta.length)
            })
            .catch(()=>{
                console.log("ERROR ")
            })     
    },[dispactch])
   
    return (
      <div className={si.wrapper}>
        {paises.map(({ name, flag, population, region, capital }) => {
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

export default Paises;
