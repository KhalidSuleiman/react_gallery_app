import React from 'react';
import Photo from './Photo';

 function PhotosList(props) { 
    console.log("This PhostList function  "+ props.data)
    let allPics = props.data.map(photo => `<img src= {https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg} key=${photo.id} alt=${photo.title} /> `);
        console.log(allPics)
       return (
        <div class="photo-container">
            <h2>Results</h2>
            <h3>This is "PhotoList" Component</h3>
            
            <ul>
                
                <Photo DataList={ allPics } />
            </ul>
                
        </div>

       );
   
}
export default PhotosList;