import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios from 'axios';
import './App.css';
import African from './cuisineComponent/African.js'
import Chinese from './cuisineComponent/Chinese.js'
import American from './cuisineComponent/American.js'
import British from './cuisineComponent/British.js'
import Cajun from './cuisineComponent/Cajun.js'
import Caribbean from './cuisineComponent/Caribbean.js'
import EasternEuropean from './cuisineComponent/EasternEuropean.js'
import European from './cuisineComponent/European.js'
import French from './cuisineComponent/French.js'
import German from './cuisineComponent/German.js'
import Greek from './cuisineComponent/Greek.js'
import Indian from './cuisineComponent/Indian.js'
import Irish from './cuisineComponent/Irish.js'
import Italian from './cuisineComponent/Italian.js'
import Japanese from './cuisineComponent/Japanese.js'
import Jewish from './cuisineComponent/Jewish.js'
import Korean from './cuisineComponent/Korean.js'
import LatinAmerican from './cuisineComponent/LatinAmerican.js'
import MiddleEastern from './cuisineComponent/MiddleEastern.js'
import Mexican from './cuisineComponent/Mexican.js'
import Mediterranean from './cuisineComponent/Mediterranean.js'
import Spanish from './cuisineComponent/Spanish.js'
import Thai from './cuisineComponent/Thai.js'
import Vietnamese from './cuisineComponent/Vietnamese.js'

class Searchbycuisine extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Router>
                    <ul className="cuisine-nav">
                        <li>
                            <Link to="/African">African</Link>
                        </li>
                        <li>
                            <Link to ='/American'>American</Link>
                        </li>
                        <li>
                            <Link to ='/British'>British</Link>
                        </li>
                        <li>
                            <Link to ='/Cajun'>Cajun</Link>
                        </li>
                        <li>
                            <Link to ='/Chinese'>Chinese</Link>
                        </li>
                        <li>
                            <Link to ='/Caribbean'>Caribbean</Link>
                        </li>
                        <li>
                            <Link to ='/EasternEuropean'>Eastern European</Link>
                        </li>
                        <li>
                            <Link to ='/European'>European</Link>
                        </li>
                        <li>
                            <Link to ='/French'>French</Link>
                        </li>
                        <li>
                            <Link to ='/German'>German</Link>
                        </li>
                        <li>
                            <Link to ='/Greek'>Greek</Link>
                        </li>
                        <li>
                            <Link to ='/Indian'>Indian</Link>
                        </li>
                        <li>
                            <Link to ='/Irish'>Irish</Link>
                        </li>
                        <li>
                            <Link to ='/Italian'>Italian</Link>
                        </li>
                        <li>
                            <Link to ='/Japanese'>Japanese</Link>
                        </li>
                        <li>
                            <Link to ='/Jewish'>Jewish</Link>
                        </li>
                        <li>
                            <Link to ='/Korean'>Korean</Link>
                        </li>
                        <li>
                            <Link to ='/LatinAmerican'>Latin American</Link>
                        </li>
                        <li>
                            <Link to ='/Mediterranean'>Mediterranean</Link>
                        </li>
                        <li>
                            <Link to ='/Mexican'>Mexican</Link>
                        </li>
                        <li>
                            <Link to ='/MiddleEastern'>Middle Eastern</Link>
                        </li>
                        <li>
                            <Link to ='/Spanish'>Spanish</Link>
                        </li>
                        <li>
                            <Link to ='/Thai'>Thai</Link>
                        </li>
                        <li>
                            <Link to ='/Vietnamese'>Vietnamese</Link>
                        </li>






                    </ul>

                    <Switch>

                        <Route path="/African">
                            <African />
                        </Route>
                        <Route path="/Chinese">
                            <Chinese />
                        </Route>
                        <Route path="/American">
                            <American />
                        </Route>
                        <Route path="/British">
                            <British />
                        </Route>
                        <Route path="/Cajun">
                            <Cajun />
                        </Route>
                        <Route path="/Caribbean">
                            <Caribbean />
                        </Route>
                        <Route path="/EasternEuropean">
                            <EasternEuropean />
                        </Route>
                        <Route path="/European">
                            <European />
                        </Route>
                        <Route path="/French">
                            <French />
                        </Route>
                        <Route path="/German">
                            <German />
                        </Route>
                        <Route path="/Greek">
                            <Greek />
                        </Route>
                        <Route path="/Indian">
                            <Indian />
                        </Route>
                        <Route path="/Irish">
                            <Irish />
                        </Route>
                        <Route path="/Italian">
                            <Italian />
                        </Route>
                        <Route path="/Japanese">
                            <Japanese />
                        </Route>
                        <Route path="/Jewish">
                            <Jewish />
                        </Route>
                        <Route path="/Korean">
                            <Korean />
                        </Route>
                        <Route path="/LatinAmerican">
                            <LatinAmerican />
                        </Route>
                        <Route path="/Mediterranean">
                            <Mediterranean />
                        </Route> 
                        <Route path="/Mexican">
                            <Mexican />
                        </Route>
                        <Route path="/MiddleEastern">
                            <MiddleEastern />
                        </Route>
                        <Route path="/Spanish">
                            <Spanish />
                        </Route>
                        <Route path="/Thai">
                            <Thai />
                        </Route>
                        <Route path="/Vietnamese">
                            <Vietnamese />
                        </Route>




                    </Switch>


                </Router>
            </div>
        )
    }
}

export default Searchbycuisine;