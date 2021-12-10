import  React, { Component } from "react";
import { withRouter } from 'react-router-dom';


class SearchForm extends Component  {
   state = {
       searchValue : '',
   }
   
    onSearchChange = (e) => {
        
        this.setState({
            searchValue : e.target.value
        })
        console.log(e.target.value)
        console.log("onSearchChange   ")
        console.log(this.state.searchValue)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(" input handler "+this.state.searchValue)
        this.props.searchPics(this.state.searchValue,"not-fixed")
        this.props.history.push(`/search/${this.state.searchValue}`)
        e.currentTarget.reset()
        

    }
    componentDidUpdate(prevProps) { // invoked after updating occurs
        if(prevProps.location.pathname !== this.props.location.pathname ) { // a condition prevents infinite loops
            if(this.props.location.pathname.includes("/search")){ // use path as state gets updated each handleChange
                const query = this.props.location.pathname.replace("/search/", "");
                this.props.searchPics(query,"not-fixed");
            }
        }
    }
    
    render(){
        return (
            <form className ="search-form" onSubmit={this.handleSubmit}>

                <input
                    type="Search"
                    onChange={this.onSearchChange}  
                    name="Search"
                    placeholder="Search" 
                    required
                />

                <button type="submit" className="search-button">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
            </form>  
        )
    }
}

export default withRouter(SearchForm);

