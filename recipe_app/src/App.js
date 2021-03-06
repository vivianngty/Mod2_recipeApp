import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios from 'axios';
import './App.css';
import Footer from './Footer'
import Searchbycuisine from './Searchbycuisine'
import Header from './Header'
import HomeContent from './HomeContent'


// another api key: 1008e28e8a29463385650478c9017f49
const BASE_URL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=0948bc163b8946b7babe602438de08d4&ingredients=`  /* find recipe by ingredients */
const RANDOM_URL = 'https://api.spoonacular.com/recipes/random?apiKey=0948bc163b8946b7babe602438de08d4&number=10'


console.log(RANDOM_URL)
/* ------------------------------------------------------------- APP Component --------------------------------------------------------------------- */
class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Header />
        <Router>
            <div className="nav">
              <ul>
                <li>
                  <Link to="/" className="home-nav">Home</Link>
                </li>
                <li>
                  <Link to="/randomrecipe" className="randomrecipe-nav">Get random recipe</Link>
                </li>
                <li>
                  <Link to ="/searchbyingredients" className="searchbyingredients-nav">Search by ingredients</Link>
                </li> 
                <li>
                  <Link to ="/searchbycuisine" className="searchbycuisine-nav">Search by Cuisine</Link>
                </li>
              </ul>
              

              <hr className="line" />

              <Switch>

                <Route path="/randomrecipe">
                  <Getrandomrecipe />
                </Route>

                <Route path="/searchbyingredients" exact>
                  <Searchbyingredients />
                </Route>

                <Route path={"/searchbyingredients/:id"} component={RecipeDetail} />

                <Route path='/searchbycuisine' exact>
                  <Searchbycuisine />
                </Route>

                <Route path="/" exact>
                  <Home />
                </Route>

              </Switch>
            </div>
            </Router>
            <Footer />
          
      </div>
    )
  }
}
/* -------------------------------------------------------------HOME Component ------------------------------------------------------------ */
class Home extends React.Component {
  render() {
    return(
      <div>
       <HomeContent />
      </div>
    )
  }
}
/* ---------------------------------------------------GET RANDOM RECIPE Component ------------------------------------------------------------ */
//<Link to={`/searchbyingredients/${recipe.id}`}> { recipe.title } </Link>

class Getrandomrecipe extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  async getRandomRecipes (){
    try{
      const res = await axios.get (RANDOM_URL);
      this.setState ({ recipes: res.data })

    } catch (error) {
      console.log (error)
    }
  }
  componentDidMount(){
    this.getRandomRecipes();
  }

  render(){
    return(
      <div className="randomRecipesCards">
        {
          this.state.recipes && this.state.recipes.recipes.map (recipe => { 
              return (
                <div className="cards">
                  <div className="individualRandomRecipe" key={ recipe.id }>
                    <h3> 🍽️ { recipe.title } </h3>
                    <h4> Servings: { recipe.servings } </h4>
                    <figure> <img src= { recipe.image } /> </figure>
                    <p>{ recipe.instructions }</p>
                  </div>
              </div>
              )
          })
        }
      </div>
    )
  }
}
/* --------------------------------------------------- SEARCH BY INGREDIENTS Component ------------------------------------------------------ */
class Searchbyingredients extends React.Component {

  constructor(props){
    super (props);
    console.log (props);

    this.state = { /* info stored here */ }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async getInformation () { /* this is where you make our API call */
    const composed_url = BASE_URL + this.state.ingredient;
    console.log (composed_url)
    try {
      const res = await axios.get(composed_url);
      this.setState({ recipes: res.data })
    } catch (e) {
      console.error(e,e.message);
    }
  }

  onSubmit (e) {  
    e.preventDefault(); /* whenever html click, the page will refresh, this will prevent that */
    /* console.log (this.state.movieName); */
    this.getInformation();
  }

  onChange(e) { /* keep track of info that user give us */
    this.setState({ [e.target.name]: e.target.value }) /* the name comes from the input movie name */
  } 


  render (){
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit = { this.onSubmit } onChange = { this.onChange }>
            <label>
              Ingredient: <input type ="text" name="ingredient" />
            </label>

            <input type="submit" value="Search" />

          </form>
          
        </header>
        {
          this.state.recipes && this.state.recipes.map (recipe => {
            return (
              <div className="randomRecipesCards">
                <div className="cards">
                  <div className="individualRandomRecipe">
                    <h3 key={recipe.id}> 
                    <Link to={`/searchbyingredients/${recipe.id}`}> { recipe.title } </Link>
                    </h3>
                    <figure> <img src={ recipe.image } /> </figure>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}
/* --------------------------------------------------------/searchbyingredients/id------------------------------------------------------------------ */

// https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=1008e28e8a29463385650478c9017f49
// https://api.spoonacular.com/recipes/716429/information?apiKey=0948bc163b8946b7babe602438de08d4&includeNutrition=false

function RecipeDetail ({match}) {
  useEffect ( () => {
    fetchRecipe();
    console.log (match);
  }, []);

  const [ recipe, setRecipe ] = useState([]);
  /* const [ info, setInfo ] = useState ([]); */
  const fetchRecipe = async() => {
    try{
      const fetchRecipe = await axios.get (`https://api.spoonacular.com/recipes/${match.params.id}/analyzedInstructions?apiKey=0948bc163b8946b7babe602438de08d4`);
      setRecipe (fetchRecipe.data[0].steps)
      console.log (fetchRecipe.data[0].steps)
    } catch (error) {
      console.error (error)
    }

  };
  useEffect ( () => {
    fetchInfo();
  }, [])
  const [ info, setInfo ] = useState ([]);
  const [ ingred, setIngred ] = useState ([]);

  const fetchInfo = async() => {
    try{
      const res = await axios.get (`https://api.spoonacular.com/recipes/${match.params.id}/information?apiKey=0948bc163b8946b7babe602438de08d4&includeNutrition=false`)
      setInfo (res.data)
      console.log (res.data)
      setIngred (res.data.extendedIngredients)
      console.log (res.data.extendedIngredients)
    }catch(error){
      console.error (error,error.message)
    }
  }

  return (
     <div>
          <h2>{info.title}</h2>
          <img src ={info.image} />
          <div className="ingre"> Ingredients:
            {
              ingred.map (ingred => 
              <div>
                <h5 className="ingredientName">{ingred.name}</h5>
              </div> 
              )
            }
          </div>
        { recipe.map (step => 
        <div className="recipeStep"> 
          <h5> {step.number} </h5> <br></br>
          <h5> {step.step} </h5>
        </div> 
        )}
    </div>
  )
}

/* ----------------------------------------------------------------------------------------------------------------------------------*/


export default App;
