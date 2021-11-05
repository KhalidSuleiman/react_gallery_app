import React from 'react';


const Photo = props => ( 
        <li >
          <img src={props.url}  alt={props.title} key={props.uId}  />
        </li>
      )

export default Photo;