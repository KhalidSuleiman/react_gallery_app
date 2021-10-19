/* eslint-disable no-undef */
//import logo from './logo.svg';
import React, { Component } from 'react';
import './index.css';
import './Components/searchForm';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import apiKey from './config';


// import components 
import SearchForm from './Components/searchForm';
import Navigation from './Components/Navigations';
import Photo from './Components/Photo';
import PhotosList from './Components/PhotosList';
import NotFound from './Components/NotFound';
import axios from 'axios';// 

export default class App extends Component  {

  
  componentDidMount = () => {
   const searchTerms =[
      "Camels", 
      "Horses",
      "Palm Trees", 
      "Forts", 
      "Iraq",
      "Egypt",
      "Turkey",
      "Palestine",
      "Maya"
    ];
    this.state = {
      searchPhrase :searchTerms[Math.floor(Math.random() * searchTerms.length)],
      results : [],
      loading : false
    };

    console.log(this.state.searchPhrase)

    let usedUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.searchPhrase}&per_page=26&page=1&format=json&nojsoncallback=1`;
    console.log(usedUrl);
    axios(usedUrl)
    .then(response => {
      console.log(response.data.photos.photo)
      this.setState({
        results : response.data.photos.photo,
        loading: false
        })
        console.log(this.state.results);
        
    }) 
    .catch(error => {
        console.log(error)
      } )


  };
    

 
  

  render() {
    
    return (
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Navigation />
      {/* <Route exact path="/" render= {() => <PhotosList   data = {this.state.results} /> }/>*/}
       
        
        <Route path= "/Navigation" component={Navigation} />
        {/*<Route component={NotFound} />*/} 
      </div>
    </BrowserRouter>
  );
  }
  
}

