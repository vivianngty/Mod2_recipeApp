import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios from 'axios';
import './App.css';

class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <div>
                    <p>API Reference: </p>
                    <button type="button" onClick ={ (e) => ( window.open('https://spoonacular.com/food-api') )} >Spoonacular</button>
                </div>
            </div>
        )
    }
}


export default Footer;