import React from 'react';
import axios from 'axios';

const cuisine_URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine='


class African extends React.Component{
    constructor(props){
        super(props)
        this.state = {};
    }
    async getAfrican(){
        const african_URL = cuisine_URL + 'african'
        try{
            const res = await axios.get (african_URL)
            console.log (res.data);
            this.setState ({ recipes: res.data })
        }catch(error){
            console.log (error)
        }
    } 
    componentDidMount(){
        this.getAfrican();
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
export default African;