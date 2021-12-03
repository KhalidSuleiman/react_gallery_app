import React from 'react';
import Photo from './Photo';

function PhotoContainer(props) {
    
    
        
   
        console.log("this is before map statement in photoContainer")
        console.log(props)
        
        
       let photos =props.data.map((photo) => <Photo url= {`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`}
                         title={photo.title}
                         uId={photo.id}  />
       );
        
       return (
        <div>
            <h1>{props.title.charAt(0).toUpperCase()+ props.title.slice(1)}</h1>
           <ul>
               { photos }
           </ul>


        </div>
       );
}

export default PhotoContainer;


