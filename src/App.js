/* eslint-disable no-undef */
//import logo from './logo.svg';
import React from 'react';
import './index.css';
import './Components/searchForm';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import apiKey from './config';


// import components 
import Navigation from './Components/Navigations';
import SearchForm from './Components/searchForm';
//import Photo from './Components/Photo';
import PhotosList from './Components/PhotosList';
import NotFound from './Components/NotFound';
import axios from 'axios';// 
import About from './Components/About';

export default class App extends React.Component  {

  

  constructor(){
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
    super();
    this.state = {
      searchPhrase :searchTerms[Math.floor(Math.random() * searchTerms.length)],
      results : [],
      loading : false
    };
    console.log(this.state.searchPhrase)
  }
  
  componentWillUnmount(){

      console.log("componentWillMount   "+this.state.results);

  };
  componentDidMount = () => {
  
    

    let usedUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.searchPhrase}&per_page=24&page=1&format=json&nojsoncallback=1`;
    console.log(usedUrl);
    axios(usedUrl)
    .then(response => {
      this.setState({
        results : response.data.photos.photo,
        loading: false
        })
        
    }) 
    .catch(error => {
        console.log(error)
      } )

  
  };
    

  
  

  render() {
    
    return (
      <SearchForm />,
      <Navigation />,

    <BrowserRouter>
      <div className="container">
          <Route  exact path= "/" render= {() =>  <PhotosList   data = {this.state.results} sWord={this.state.searchPhrase} />} />
          <Route path="/About" component={About} /> 
        {/* <Route path= "/Navigation" component={Navigation} /> */}
          <Route component={NotFound} />
      </div>
    </BrowserRouter>
    );
  }
  
}

