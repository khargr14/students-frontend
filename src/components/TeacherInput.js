import React from 'react'
import { connect } from 'react-redux'
import { addTeacher } from '../actions/addTeacher'



class TeacherInput extends React.Component {
    //:name, :number, :email, :date, :message

    state = {
        name: '',
        email: '',
        date: '',
        message: ''

    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('add cont?==>>', this.state, 'props==>>', this.props)
        this.props.addTeacher(this.state, this.props.student.id);
        this.setState({
            name: '',
            email: '',
            date: '',
            message: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Contacted Name: </label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange} /><br /><br />

                    {/* <label>Number: </label>
                    <input type='text' placeholder='Number' value={this.state.number} name="number" onChange={this.handleChange} /><br /><br /> */}

                    <label>Email: </label>
                    <input type='text' placeholder='Email' value={this.state.email} name="email" onChange={this.handleChange} /><br /><br />

                    <label>Date: </label>
                    <input type='text' placeholder='Date' value={this.state.date} name="date" onChange={this.handleChange} /><br /><br />

                    <label>Message: </label>
                    <textarea type='text' placeholder='Message' value={this.state.message} name="message" onChange={this.handleChange} /><br /><br />

                    <input type="submit" />
                </form>
            </div>

        )


    }
}

export default connect(null, { addTeacher })(TeacherInput) 
//teacher suppose to be blue
