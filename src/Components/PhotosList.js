import React from 'react';
import Photo from './Photo';
import SearchForm from './searchForm';
import Navigation from './Navigations';

 function PhotosList(props) { 
    console.log(props.data)
    console.log(" PhotoList-->   "+props.sWord)
    let allPics =props.data.map(item => 

        <Photo url= {`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`} title={item.title} uId={item.id}  /> 
         
        );
        console.log(allPics)
       return (
            <div class="photo-container">
                {/* <SearchForm /> */}
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