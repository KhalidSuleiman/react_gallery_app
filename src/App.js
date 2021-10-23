

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
import SearchForm from './Components/searchForm'
import PhotosList from './Components/PhotosList';
import NotFound from './Components/NotFound';
import axios from 'axios';// 
import About from './Components/About';


export default class  App extends React.Component  {
  constructor(props){
    const value =props.data;
    console.log(value);
    
    super(props);
    
      this.state = {
      searchPhrase :'',
      results : [],
      loading : false
      };

    console.log("log props.data "+props.data);
    console.log("Log phraseWord "+this.state.searchPhrase)
  }
  
  componentWillUnmount(){
    
      console.log("componentWillMount   "+this.state.results);

  };
  
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
      "Maya",
      "Islam",
      "Arabia",
      "Christians",
      "Jewish",
      "Gaza",
      "Mecca",
      "Medina",
      "Oman",
      "Dubai",
      "Saudi Arabia",
      "Prophet Mohammed",
      "Date Palm"
    ]; 
    let value = searchTerms[Math.floor(Math.random() * searchTerms.length)];
      console.log("first look "+value);
    this.searchFor(value)
  
  };
    
  searchFor( query ) {
    console.log("inside searchFor "+query)
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=240&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({ 
         results: response.data.photos.photo,
         searchPhrase : query,
         loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  
  

  render() {
    
    return (
      <SearchForm onSearch={this.searchFor} />,
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




