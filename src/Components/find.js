import React from 'react';
import apiKey from '../config';
import axios from 'axios';
import PhotosList from './PhotoContainer';


async function FindTerm(props)  {
  
    let picList =[];
    
    
        await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${props.term}&per_page=6&format=json&nojsoncallback=1`)
        .then (response => { picList = response.data.photos.photo})  
        .catch(error =>console.log("some thing wrong "+error))
   
    
    return (
        <div className ="photo-container">
            <h1>{ props.term }</h1> 
                
                <PhotosList data={picList}  sWord={props.term} />
                

        </div>
    );
   
      
}
export default FindTerm;