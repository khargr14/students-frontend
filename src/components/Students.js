import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteStudent } from '../actions/deleteStudent';
import { Button } from 'react-bootstrap';
import Like from './like'
import DisLike from './Dislikes'


const Students = (props) => {

  const handleDelete = (student) => {
    props.deleteStudent(student.id)
  }


  return (
    <div>
      {props.students.map(student =>
        <li key={student.id}>
          <Link to={`/students/${student.id}`}>{student.name} - {student.number}- {student.email}</Link>
          - <Button onClick={() => handleDelete(student)}>Delete</Button> - <Link to={`/students/${student.id}/edit`}>Edit</Link> &nbsp; <span><Like/></span><br />
        </li>)}<br/>
    </div>
  )
}

export default connect(null, { deleteStudent })(Students);