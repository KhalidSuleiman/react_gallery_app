import React from 'react';

/**
 * 
 * 
 * @returns constructed each image with jsx
 */
function Photo(props)
{
    return (
        <li>
            <img src={props.url} alt={props.title} key={props.pId}/>
        </li>)
}

export default Photo;