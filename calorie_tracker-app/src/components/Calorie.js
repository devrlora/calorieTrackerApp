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
        this.props.onEditSubmit(this.idInput.value,this.calorieInput.value, this.fatsInput.value,this.proteinsInput.value, this.props.id);
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
                        <input placeholder = "Last Name"
                            ref={fats => this.fatsInput = fats} 
                            defaultValue= {fats} />
                        <input placeholder = "Email"
                            ref={proteinsInput => this.proteinsInput = proteinsInput} 
                            defaultValue= {email} />
                        <button>Save</button>
                    </form>
                )
                :(
                    <div>
                    <span>{id}</span>
                       {`|`}
                    <span>{calories}</span>
                       {`|`}
                       <span>{fats}</span>
                       {`|`}
                       <span>{proteins}</span>
                       {`|`}
                       <button onClick ={this.onDelete}>Delete</button>
                       {`|`}
                       <button onClick ={this.onEdit}>Edit </button>
               </div>
                
                )
             }        
        </div>
    )
  }
}

export default Calorie ;
