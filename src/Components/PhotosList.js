import React from 'react';
import Photo from './Photo';
import SearchForm from './searchForm';
import Navigation from './Navigations';

 function PhotosList(props) { 
    
   
    let allPics =props.data.map(item => 

        <Photo url= {`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`} title={item.title} uId={item.id}  /> 
         
        );
        console.log("_+_+_+_+-=-=-=-=-=-=-===0=0=0=")
       
        return (
            <div className ="photo-container">
                <SearchForm />
                <Navigation />
                <h2>Results For  </h2>
                <h3>{props.sWord}</h3>
                <ul>
                    { allPics } 
                 
                </ul>

            </div>
        );
   
}
export default PhotosList;