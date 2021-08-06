
import React from 'react'
import { connect } from 'react-redux'
import {editStudent} from '../actions/editStudent'


//   :name, :number, :email,  :teacher_id



class StudentFormEdit extends React.Component {

    state = {
        id: '',
        name: '',
        number: '',
        email: '', 
       
    };

    componentDidMount(){
        // localhost:3000/students/1
        const student = this.props.students.filter(student => student.id == this.props.match.params.id)[0];
        this.setState({
            id: student.id,
            
            name: student.name,
            number: student.number,
            email: student.email, 
            industry: student.industry
        })
    }
        
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
       
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.editStudent(this.state);
        this.setState({
            name: '',
            number: '',
            email: '', 
           
        });
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

export default connect(null, { editStudent })(StudentFormEdit)