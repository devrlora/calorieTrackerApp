import React, { Component } from 'react';

class AddCalories extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
onSubmit(event){
    event.preventDefault();
   this.props.onAdd(this.idInput.value,this.caloriesInput.value,this.fatsInput.value,this.proteinsInput.value)
   this.idInput.value = "";
   this.caloriesInput.value = "";
   this.fatsInput.value = "";
   this.proteinsInput.value = "";

}

render(){
    return (
        <form onSubmit={this.onSubmit}>
            <h2>Add Calories</h2>
            <input placeholder = "Name" ref={idInput=>this.idInput = idInput}/>
            <input placeholder = "Calories" ref={caloriesInput=>this.caloriesInput = caloriesInput}/>
            <input placeholder = "Fats"ref={fatsInput => this.fatsInput = fatsInput} />
            <input placeholder = "Proteins"ref={proteinsInput => this.proteinsInput = proteinsInput} />
            <button>Add</button>
        </form>
    )
  }
}

export default AddCalories;
