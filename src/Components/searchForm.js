import  React, { Component } from "react";
import Navigation from "./Navigations";
import apiKey from "../config";
import axios from 'axios';


export default class SearchForm extends Component  {
    constructor(props){
        super(props)
        this.state = {
        picsData : [],
        searchText: '',
        loading: false
        }
    }
    
    onChangeSearch = e => {
        this.setState({
            searchText :e.target.value
        })
        console.log("onChangeSearch function   "+this.state.searchText)
    }
    handleSubmission = e => {
        e.preventDefault();
        
        const searchText = e.target.value;
        const searchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchText}&per_page=24&page=1&format=json&nojsoncallback=1`;

        const results =axios.get(searchUrl)
            .then(results => this.setState({
                picsData : results.data,
                searchText: '',
                loading: false
                }), console.log(this.state.picsUrl))
            .then(error => console.log(error));


            results.photos.photo.map(pic => `<img src= {https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg} key=${pic.id} alt=${pic.title} /> `);
    }

   
    render(){
        return (
         <form class="search-form" onSubmit={this.handleSubmission}>
            <input type="search"  onChange={this.onChangeSearch} name="search" placeholder="Search" required/>
                <button type="submit" class="search-button">
                <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                </button>
         </form>
        
    );
}
}


