import React from 'react';
import Photo from './Photo';
import SearchForm from './searchForm';
import Navigation from './Navigations';
import apiKey from '../config';
import axios from 'axios';
import PhotosList from './PhotosList';

export default class PreDefinedSearchPhrase  extends React.Component{ 
    constructor (props){
      super(props);
      
      this.state = { 
          phrase : this.props.sWord,
          picList :[], 
          loading : false
        }
      // this.props.search(this.props.sWord)
      // console.log("constructor Sword = "+this.props.sWord)
      console.log("+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+")
      this.searchFor(this.state.phrase)
      console.log("+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+")
    }
    
    
      

     searchFor = (query) => { 
        // if(query === undefined ){return 
        // }else {
        console.log("constructor state phrase = "+query)
        console.log("arrow head function"+this.state.phrase )
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.phrase}&per_page=40&format=json&nojsoncallback=1`)
          .then(response => {
            this.setState({ 
              picList: response.data.photos.photo,
              loading: false
            });
            }
          )
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        }
        );
      //}
      
    }
    componentDidMount(){
      
      this.searchFor(this.state.phrase)
    }
    
    render() {
      console.log(this.state.picList)
      
      
      return (
            <div class="photo-container">
                
                <ul>
                <PhotosList data={this.state.picList}  sWord={this.state.phrase} />
                 
                </ul>

            </div>
        );
   }
 
}
