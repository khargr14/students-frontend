import React from 'react'
import { connect } from 'react-redux'
import {addStudent} from '../actions/addStudent'


//   :name, :number, :email, :teacher_id

class StudentForm extends React.Component {

    state = {
        name: '',
        number: '',
        email: '', 
        

    };
        
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });

    };
       
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addStudent(this.state);
        this.setState({
            name: '',
            number: '',
            email: '', 
           
      
        })
    }



    render(){
        return(
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Student Name: </label>
                   <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/><br/>

                   <label>Number: </label>
                   <input type='text' placeholder='Number' value={this.state.number} name="number" onChange={this.handleChange}/><br/><br/>

                   <label>Email: </label>
                   <input type='text' placeholder='Email'value={this.state.email} name="email" onChange={this.handleChange}/><br/><br/>

                  

                    <input type="submit"/>
               </form>
           </div> 
        )
    }
}

export default connect(null, { addStudent })(StudentForm)