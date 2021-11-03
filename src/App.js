

import React from 'react';
import './index.css';
import './Components/searchForm';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import apiKey from './config';


// import components 
import Navigation from './Components/Navigations';
import SearchForm from './Components/searchForm'
import PhotosList from './Components/PhotosList';
import NotFound from './Components/NotFound';
import PreDefinedSearchPhrase from './Components/PredefinedSearchPhrase';
import ErrorBoundary from './Components/ErrorBoundary';
import axios from 'axios';// 



export default class  App extends React.Component  {
  constructor (){
    super();
    
    console.log("constructor");
    const searchTerms =[
      "Camels", 
      "Horses", 
      "Islam",
      "Arabia",
      "Gaza",
      "Dubai",
      "Date Palm",
      "Highway 66"
    ]; 

    
    
    this.state = {
      searchPhrase :searchTerms[Math.floor(Math.random() * searchTerms.length)],
      results : [],
      loading : false
      };
    // setting search phrase for predefined search bottons 
    
    this.searchFor()
    // this.setState({searchPhrase : "Oman"});  // {searchPhrase : ]});
    //this.searchFor();
  }
  
  
  
  searchFor() {
    console.log("arrow head function app")
    this.setState({loading : true})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.searchPhrase}&per_page=50&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({ 
         results: response.data.photos.photo,
         
         loading: false
      });
      
    }
    )
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  

  render() {
    
    console.log("-------------------------------------------")
    console.log("App render "+this.state.searchPhrase)
    console.log(this.state.results)
    console.log("-------------------------------------------")

    
    return (
      
      <div class="photo-container">
        
        <BrowserRouter>
          <div className="container">
            <Switch>
              
              <Route  exact path= "/" render= { ()=> <PhotosList data={this.state.results}  sWord={this.state.searchPhrase} />} />
              <Route path="/Mountain" render = {() => <PreDefinedSearchPhrase  sWord= {"Mountain"} />} />
              <Route path="/Desert" render = {() =>  <PreDefinedSearchPhrase  sWord= {"Desert"} />} />
              <Route path="/Ocean" render = {() => <PreDefinedSearchPhrase  sWord= {"Ocean"} />} />
              <Route path="/:query" render={ () =>  <PreDefinedSearchPhrase sWord={"Red Sea"} />} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
        );
  }
componentDidUpdate(){

}
  
}



