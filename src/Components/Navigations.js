import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
//import  Photo from './Photo';

export default class Navigation extends Component  {
   render () { 
       return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/Mountain">Mountain</NavLink></li>
                    <li><NavLink to="/containerShip"> Containers Ship</NavLink></li>
                    <li><NavLink to="/Duqm">Duqm</NavLink></li>
                </ul>

            </nav>
       );
   }
}