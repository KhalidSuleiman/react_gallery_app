
import React from 'react';
import NoResults from './NoResults';
import Photo from './Photo';

/**
 * 
 * @param {data array and the title } props 
 * @returns construct full 24 images 
 */
function PhotoContainer(props) {
    
   let photos =[] 
        
   
        
        if(props.data.length > 0){
                photos =props.data.map((photo) => <Photo url= {`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`}
                                        title={photo.title}
                                        pId={photo.id}
                                        key={photo.id}  />
                                        )
        return (
           
        <div>
            <h1>{props.title.charAt(0).toUpperCase()+ props.title.slice(1)}</h1>
           <ul>
               { photos }
           </ul>


        </div>
       );
        }else return (
            <div>
                <NoResults />
            </div>
        );
            
        
       
        
       
}

export default PhotoContainer;


