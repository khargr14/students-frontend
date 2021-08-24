import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Students from '../components/Students'
import StudentForm from '../components/StudentForm'
import { fetchStudents } from '../actions/fetchStudents'
import Student from '../components/Student'
import StudentFormEdit from '../components/StudentFormEdit'

//stateful class container

class StudentContainer extends React.Component {

    componentDidMount() {
       
        this.props.fetchStudents();
        
    }

  
    render() {
        console.log('this ....biz props==>>', this.props)
        return (
            <div>
                <Switch>
                    <Route path='/students/new' component={StudentForm} />
                    <Route path='/students/:id/edit' render={(routerProps) => <StudentFormEdit {...routerProps} students={this.props.students} />} />
                    <Route path='/students/:id' render={(routerProps) => <Student {...routerProps} students={this.props.students} />} />
                    <Route path='/students' render={(routerProps) => <Students {...routerProps} students={this.props.students} />} />
                </Switch>
            </div>
        )
    }
}
// <Students {...routerProps} students={this.props.students}  storing data/>
const mapStateToProps = (state) => {
    return {
        students: state.students,
    };
};

export default connect(mapStateToProps, { fetchStudents })(StudentContainer);
