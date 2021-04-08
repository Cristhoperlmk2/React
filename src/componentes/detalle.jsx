import React ,{useEffect} from 'react';
import Card from './Pais'
import {useSelector,useDispatch} from 'react-redux';
import s from "./Card.module.css";
export default function Detalle(props){

    const dispactch=useDispatch();
    const pais =useSelector(state => state.pais)
    const namePais = props.match.params.name;
    
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${namePais}`)
        .then(data => data.json())
        .then(respues =>{
            dispactch({
                type:"GET_PAIS", payload:respues[0]
            })
        })
      
    },[namePais,dispactch]);

    return (
      <div className={s.pais}>
        <Card
          img={pais.flag}
          name={pais.name}
          population={pais.population}
          region={pais.region}
          capital={pais.capital}
          key={pais.name}
        />
      </div>
    );
}

