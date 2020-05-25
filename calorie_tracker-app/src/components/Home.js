import React, { Component } from 'react';
import Employee from './Employee';
import AddEmployee from './AddEmployee';
import Totals from './Totals';
import axios from 'axios';

// const API_KEY=process.env.REACT_APP_API_KEY;
// const API_ID=process.env.API_ID;


class Home extends Component {
 constructor(props){
   super(props);
    this.state={
    employees: []
    };

  this.onDelete=this.onDelete.bind(this); 
  this.onAdd=this.onAdd.bind(this); 
  this.onEditSubmit=this.onEditSubmit.bind(this); 
 }

  async componentDidMount() {
    const response = await fetch('/raf_api/v1/employees');
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
    this.setState({ employees: body });
  }


    getEmployees(){
        return this.state.employees;
        }

    onAdd(id,firstName,lastName,email){
      const employees = this.getEmployees();
      employees.push({
          id,
        firstName,
        lastName,
        email
      });
      this.setState({employees});
    }

    onDelete(id){
        const employees = this.getEmployees(); 
        const filteredEmployees = employees.filter(employee => {
        return employee.id !== id;
        });
        this.setState({employees: filteredEmployees});
    }  
 
    onEditSubmit(id,firstName, lastName, email, originalId){
    let employees = this.getEmployees();
    employees = employees.map(employee => {
        if(employee.id === originalId){
            employee.id = id;
          employee.firstName = firstName;
          employee.lastName = lastName;
          employee.email = email;
         }    
         return employee;
        });
        this.setState({employees});
      }

  render() {
    // const {posts,errorMsg} = this.state
    return (
      <div className ='App'>
        <h1>Employees List</h1>
        <form onSubmit={this.handleSubmit}>
            <label>
                Person Name:
                <input type='text' name = 'name' onChange ={this.handleChange}/>
            </label>
            <button>Add</button>
        </form>
        <AddEmployee
        onAdd ={this.onAdd}
        />
        {this.state.employees.map(employee =>{
          return (
            <Employee
              key = {employee.id}{...employee}
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

