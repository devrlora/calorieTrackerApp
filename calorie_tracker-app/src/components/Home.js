import React, { Component } from 'react';
import Calorie from './Calorie';
import AddCalories from './AddCalories';
import Totals from './Totals';
import axios from 'axios';

// const API_KEY=process.env.REACT_APP_API_KEY;
// const API_ID=process.env.API_ID;


class Home extends Component {
 constructor(props){
   super(props);
    this.state={
    calories: []
    };

  this.onDelete=this.onDelete.bind(this); 
  this.onAdd=this.onAdd.bind(this); 
  this.onEditSubmit=this.onEditSubmit.bind(this); 
 }

  async componentDidMount() {
    const response = await fetch('/raf_api/v1/calories');
    axios.get(`https://jsonplaceholder.typicode.com/posts`
    // {headers: {
    //     "Authorization" : API_KEY
    //   }
    // }
    )
        .then(response => {
            console.log(response);
            this.setState({item: response.data})
        })
        .catch(error => {
                console.log(error)
                this.setState({errorMsg: "Error retrieving data"})
        })
        
    const body = await response.json();
    this.setState({ calories: body });
  }


    getCalories(){
        return this.state.calories;
        }

    onAdd(id,calories,fats,proteins){
      const calories1 = this.getCalories();
      calories1.push({
          id,
        calories,
        fats,
        proteins
      });
      this.setState({calories1});
    }

    onDelete(id){
        const calories = this.getCalories(); 
        const filteredCalories = calories.filter(calorie => {
        return calorie.id !== id;
        });
        this.setState({calories: filteredCalories});
    }  
 
    onEditSubmit(id,calories, fats, proteins, originalId){
    let calories1 = this.getCalories();
    calories1 = calories1.map(calorie => {
        if(calorie.id === originalId){
            calorie.id = id;
            calorie.calories = calories;
            calorie.fats = fats;
            calorie.proteins = proteins;
         }    
         return calories;
        });
        this.setState({calories1});
      }

  render() {
    // const {posts,errorMsg} = this.state
    return (
      <div className ='App'>
        <h1>Calorie Tracker</h1>
        <form onSubmit={this.handleSubmit}>
            <label>
                Search Foods:
                <input type='text' name = 'name' onChange ={this.handleChange}/>
            </label>
            <button>Add</button>
        </form>
        <AddCalories
        onAdd ={this.onAdd}
        />
        {this.state.calories.map(calorie =>{
          return (
            <Calorie
              key = {calorie.id}{...calorie}
              onDelete = {this.onDelete}
              onEditSubmit = {this.onEditSubmit }
            />
          )
        })}
         {/* <div>
                List of posts
                {
                    posts.length ?
                    posts.map(post => <div key = {post.id}> {post.title}</div>):
                     null
                }
                {errorMsg ? <div>{errorMsg}</div>:null}
            </div> */}
            <Totals />
      </div>
    )
  }
}

export default Home;

