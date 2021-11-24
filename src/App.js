<<<<<<< HEAD
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

import PhotosList from './Components/PhotosList';
import NotFound from './Components/NotFound';
import SearchForMountain from './Components/SearchForMountain';
import SearchForDesert from './Components/SearchForDesert';
import SearchForOcean from './Components/SearchForOcean';
import ErrorBoundary from './Components/ErrorBoundary';
import SearchBar from './Components/SearchBar';
import axios from 'axios';// 



export default class  App extends React.Component  {
  

  searchTerms =[
      "Camels", 
      "Horses", 
      "Islam",
      "Arabia",
      "Gaza",
      "Dubai",
      "Date Palm",
      "Highway 66",
      "Red Rocks"
  ]; 

  state = {
    searchPhrase :this.searchTerms[Math.floor(Math.random() * this.searchTerms.length)],
    results : [],
    loading : false
  };

searchForm = async (props) => {
    console.log("insid searchFor"+this.state.searchPhrase)
    this.setState({loading : true})
    await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.searchPhrase}&per_page=50&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({ 
         results: response.data.photos.photo, 
         loading: false
      });
      
    }
    ).catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  initialSetting = () => {
    
    this.setState({searchPhrase : this.searchTerms[Math.floor(Math.random() * this.searchTerms.length)]})
    console.log("+_+_+_+_+_+_+_+start_+_+_+_+_+_+_+_+_+_");
    console.log(this.state.searchPhrase);
    // this.setState({ searchPhrase : this.searchTerms[Math.floor(Math.random() * this.searchTerms.length)]});
    console.log(this.state.searchPhrase);
      
    const value = this.state.searchPhrase
    this.searchForm(value);
      
    console.log("+_+_+_+_+_+_+_+end_+_+_+_+_+_+_+_+_+_");
  }
  onSearchChange = (e) => {
      this.setState({ searchPhrase : e.target.value }); 
  }
  handleSubmit =(e) => {
    e.preventDefault();
    this.searchForm(this.state.searchPhrase);
    e.currentTarget.reset();
  }
  
  componentDidMount(){
    this.initialSetting();
  }

  render () {
    
    return (
      
      <div class="photo-container">
        
        <BrowserRouter>
          <ErrorBoundary>
          <div className="container">
            
            <Switch >  
              <Route  exact path= "/" render= { ()=> <PhotosList data={this.state.results}  sWord={this.state.searchPhrase} />} />
              <Route path="/Mountain" render = {() => <SearchForMountain  />} />
              <Route path="/Desert" render = {() =>   <SearchForDesert   />} />
              <Route path="/Ocean" render = {() => <SearchForOcean   />} />
              <Route path="/:query" render={ () =>  <SearchBar change={this.onSearchChange}  submit= {this.handleSubmit} />} />
              <Route component={NotFound} />
          </Switch> 
          </div>
          </ErrorBoundary>
        </BrowserRouter>
      </div>
    )
  }
}





=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 876d931 (Initialize project using Create React App)
