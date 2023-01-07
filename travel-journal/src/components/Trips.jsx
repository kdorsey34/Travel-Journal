import React from "react" 


export default function Trips(props) {
  console.log(props)
  return(
    <div>

        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <h2>{props.googleMapsUrl}</h2>
        <h2>{props.startDate}</h2>
        <h2>{props. endDate}</h2>
        <p>{props.description}</p>
        <img src={props.imgUrl} />
      </div>
  )
}
       
 

  