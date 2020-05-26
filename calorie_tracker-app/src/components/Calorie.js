import React, { Component } from 'react';

class Calorie extends Component {
 constructor(props){
     super(props);
     this.state={
         isEdit: false
     }

     this.onDelete = this.onDelete.bind(this);
     this.onEdit = this.onEdit.bind(this);
     this.onEditSubmit = this.onEditSubmit.bind(this);
 }

    onDelete(){
        const {onDelete, id} = this.props; 
        onDelete(id);
 }

    onEdit(){
        this.setState({isEdit: true});
 }
    onEditSubmit(event){
        event.preventDefault();
        this.props.onEditSubmit(this.idInput.value,
            this.caloriesInput.value, 
            this.fatsInput.value,
            this.proteinsInput.value, 
            this.props.id);
        this.setState({isEdit: false});
 }


    render(){
        const {id,calories,fats,proteins} = this.props;
        return (
            <div>
                {
                this.state.isEdit
                ?(
                    <form onSubmit={this.onEditSubmit}> 
                        <input placeholder = "Id" 
                            ref={id=>this.idInput = id}
                            defaultValue= {id} />
                        <input placeholder = "Calories" 
                            ref={calories=>this.caloriesInput = calories}
                            defaultValue= {calories} />
                        <input placeholder = "Fats"
                            ref={fats => this.fatsInput = fats} 
                            defaultValue= {fats} />
                        <input placeholder = "Proteins"
                            ref={proteinsInput => this.proteinsInput = proteinsInput} 
                            defaultValue= {proteins} />
                        <button>Save</button>
                    </form>
                    )
                :(
                <div>
                    <span>{id}</span>
                    
                    <span>{calories} cal</span>
                    
                    <span>{fats} grams</span>
                    
                    <span>{proteins} grams</span>
                    
                    <button onClick ={this.onDelete}>Delete</button>
                    
                    <button onClick ={this.onEdit}>Edit </button>
                </div>
                    
                 )
             }        
        </div>
    )
  }
}

export default Calorie ;
