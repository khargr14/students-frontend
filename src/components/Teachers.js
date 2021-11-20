import React from 'react'
import { connect } from 'react-redux';
import { deleteTeacher } from '../actions/deleteTeacher';




const Teachers = (props) => {
    const handleDelete = (teacher) => {
        props.deleteTeacher(teacher.id, teacher.student_id);
    }

    return (
        <div>
            {props.teachers && props.teachers.map(teacher =>
                <li key={teacher.id}>
                    <h4> {teacher.name}</h4> - {teacher.number}- {teacher.email}- {teacher.date}- {teacher.message} <button onClick={() => handleDelete(teacher)}>Delete</button>
                </li>)}

        </div>

        
    )
}

export default connect(null, { deleteTeacher })(Teachers);