import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios from 'axios';

const cuisine_URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine='


class Italian extends React.Component{
    constructor(props){
        super(props)
        this.state = {};
    }
    async getItalian(){
        const Italian = cuisine_URL + 'italian'
        try{
            const res = await axios.get (Italian)
            console.log (res.data);
            this.setState ({ recipes: res.data })
        }catch(error){
            console.log (error)
        }
    } 
    componentDidMount(){
        this.getItalian();
    }
    render(){
        return(
            <div>
                {
                    this.state.recipes && this.state.recipes.results.map (recipe => {
                        return (
                            <div>
                                <h3>{ recipe.title }</h3>
                                <img src={recipe.image}></img>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default Italian;