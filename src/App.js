
import React  from 'react';
import './index.css';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
 

// import components
import apiKey from "./config";
import NotFound from './Components/NotFound';
import SearchForm from  './Components/searchForm';
import Navigation from './Components/Navigations';
import PhotoContainer from "./Components/PhotoContainer";


export default class  App extends React.Component  {
  //state variables 
  state = {
    searchPhrase :'', // this.searchTerms[Math.floor(Math.random() * this.searchTerms.length)]
    query :'',
    results : [],
    mountain : [],
    Duqm : [],
    containersShip: [],
    loading : false
  };

  /*
  searchPics has two parameters term: has the string value of search word to be passed by API 
  and type : two values "fixed" for predefined terms and "non-fixed" for search word entered by the user 
  searchPics update the state value above 
  */
   searchPics =async(term, type) => {
    this.setState( {   //indicating starting of API search and waiting for response 
      loading : true
      })

    
    await axios.get
        (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${term}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          if(type === "fixed"){
            
            this.setState({[term] : response.data.photos.photo})
            
          }else {
            
            this.setState({  
              results : response.data.photos.photo
              
            })
          }
            
          
        })
        .catch(error =>console.log("some thing wrong "+error))
        this.setState( {  //API and search ended 
          loading : false
        })

    
    
    

  }
  componentDidMount(){ // immediatly when first load the page will call searchPics for each term and assign the values for predefined terms 
    const fixedSearch = [
      'mountain','Duqm','containersShip'
    ];
    fixedSearch.map(term  => this.searchPics(term, "fixed"));
   

  }
  
  
  render () {
    
    return (

        <div className ="container">

          <BrowserRouter>

                <div className="photo-container">

                  <SearchForm searchPics ={this.searchPics} />
                  <Navigation />
                  { (this.state.loading)
                    ? 
                  <div className="text-center">
                    <h1 className="text-white">Loading...</h1>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
  
                  :<Switch >
                    <Route  exact path= "/" render= { ()=> <Redirect to={"/Mountain"} />} />
                    <Route exact path="/Mountain" render = {() => <PhotoContainer
                        data ={this.state.mountain}
                        title = "Mountain"
                        type = "fixed" />} />
                    <Route exact path="/Duqm" render = {() => <PhotoContainer
                        data ={this.state.Duqm}
                        title = "Duqm"
                        type = "fixed" />} />
                    <Route exact path="/containerShip" render = {() => <PhotoContainer
                        data ={this.state.containersShip}
                        title = "Containers Ship"
                        type = "fixed" />} />
                        
                    <Route exact path="/search/:query" render={({ match }) => 
                        <PhotoContainer
                            data={this.state.results}
                            title={match.params.query}
                            type="non-fixed"
                            
                        /> 
                      }
                    />
                    
                    <Route component={NotFound} />

                  </Switch>
                  }
                </div>
                    


          </BrowserRouter>
        </div>
    )

  }
  

}


