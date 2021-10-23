import React from 'react';


const Photo = props => ( 
        <li >
          <img src={props.url} key={props.uid} alt={props.title} />
        </li>
      )

export default Photo;