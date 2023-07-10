import React, { useState, useEffect } from "react";
import Card from './Card';
import axios from "axios";

function CardMap(props){
  return (
    
    <>
     {/* <h1>Genres - {props.genres}</h1> */}
    
    <Card
      title={props.title}
      image={props.image}
      synopsis={props.synopsis.slice(0,150)}
    />
    
    
    </>
    
    
  );
}

function Secpage(){
  const [apiArr, setapiArr] = useState([]);
  
  useEffect(() => {
    apiCall();
  }, []);
  const options={
    method: 'GET',
    url: 'https://anime-db.p.rapidapi.com/anime',
  params: {
    page: '1',
    size: '10',
    search: 'Fullmetal',
    genres: 'Fantasy,Drama',
    sortBy: 'ranking',
    sortOrder: 'asc'
  },
  headers: {
    'X-RapidAPI-Key': 'ff4815a894mshef90b6cc2091b2fp1bcf42jsne0fd5802b6c1',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
  }

  async function apiCall(){
    const response = await axios.request(options);
    console.log(response.data);
    setapiArr(response.data.data);
  }


  return(
    <>

      {
        apiArr.map(CardMap)
      }
   
    </>

  );
}

export default Secpage;
