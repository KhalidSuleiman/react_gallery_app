import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import  Photo from './Photo';

export default class Navigation extends Component  {
   render () { 
       return (
            <nav class="main-nav">
                <ul>
                    <li><NavLink exact to="/"> Home </NavLink></li>
                    <li><NavLink to="/Mountain">Mountain</NavLink></li>
                    <li><NavLink to="/Desert"> Desert</NavLink></li>
                    <li><NavLink to="/Ocean">Ocean</NavLink></li>
                </ul>
            </nav>
       );
   }
}