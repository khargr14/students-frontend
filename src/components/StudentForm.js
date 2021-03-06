import React from 'react'
import { connect } from 'react-redux'
import {addStudent} from '../actions/addStudent'
import {withRouter } from 'react-router-dom'

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
        this.props.history.replace('/students')
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

               {
                   this.props.error && (
                       <div style={{
                           color: 'red'
                       }}>
                           Something went wrong
                        </div>
                   )
               }
           </div> 
        )
    }
}

// Access the `error` property from redux store/state

function mapStateToProps(reduxState) {
    const { error } = reduxState

    return {
        error
    }
}

export default connect(mapStateToProps, { addStudent })(withRouter(StudentForm))