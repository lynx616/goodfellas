import React from 'react'

function Card(props){
  return (
    <>
     
    <article className="card-main">
        <div className="temporary_text">
            <img src={props.image} alt=""/>
        </div>
    <div className="card_content">
        <span className="card_title">{props.title}</span>
            <p className="card_description">{props.synopsis}...</p>
            <button>More Info</button>
    </div>
    </article>
    
    </>
  );
}


export default Card;