import React from 'react';
import Photo from './Photo';
import SearchForm from './searchForm';
import Navigation from './Navigations';

 function PhotosList(props) { 
   

    let photoRawData = props.data;
    let searchWord = props.sWord;
    console.log(searchWord);
    let allPics = photoRawData.map(photo => 

        <Photo url= {`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`} title={photo.title} uId={photo.id}  /> 
        
        );
    
        console.log(photoRawData);
        console.log(allPics);
        
       return (
            <div class="photo-container">
                <SearchForm />
                <Navigation />
                <h2>Results For  </h2>
                <h3>{searchWord}</h3>
                <ul>
                    { allPics } 
                 
                </ul>

            </div>
        );
   
}
export default PhotosList;