import React from 'react'
import apiKey from '../config'
import axios from 'axios'
import PhotosList from './PhotosList';

class SearchForOcean extends React.Component  {
  constructor(props){
    super(props);
    this.searchPics()
  } 
    state ={
      picList : [],
      searchWord :'Ocean',
      
    }
    

  

    
  async searchPics() {
    await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.searchWord}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => { this.setState({picList : response.data.photos.photo})})
    .catch(error =>console.log("some thing wrong "+error))
   
  }
        
      
    render() {
      return (
            <div className ="photo-container">
                
                <ul>
                <PhotosList data={this.state.picList}  sWord={this.state.searchWord} />
                 
                </ul>

            </div>
        );
   
      }
}
export default SearchForOcean