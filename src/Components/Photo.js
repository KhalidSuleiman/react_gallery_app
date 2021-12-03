import React from 'react';

function Photo(props)
{
    return (
        <li>
            <img src={props.url} alt={props.title} key={props.uId}/>
        </li>)
}

export default Photo;