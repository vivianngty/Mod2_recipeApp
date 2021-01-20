import React from 'react';
import './App.css';
import fridge from './fridge.png';

class HomeContent extends React.Component {
    render() {
      return(
        <div>
         <h1>Welcome to recipe-land</h1>
         <br />
         <h1>Don't know what to cook? No worries. We gotchu!</h1>{/* <hr className="line" /> */}
         <img className="fridgeImage" src={fridge} alt ="fridge-image" />
        </div>
      )
    }
  }

export default HomeContent;