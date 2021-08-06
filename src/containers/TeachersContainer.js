import React from 'react'
import TeacherInput from '../components/TeacherInput'
import Teachers from '../components/Teachers'


const TeachersContainer = (props) => {
        return(
            <div>
                <TeacherInput student={props.student}/>
                <Teachers teachers={props.student && props.student.teachers}/>
            </div>
        )
}

export default TeachersContainer

//suppose to be blue