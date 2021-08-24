import React, { useMemo } from 'react'
import { Redirect } from 'react-router-dom'
import TeachersContainer from '../containers/TeachersContainer'




const Student = (props) => {

  // localhost:3000/student/5
  //const student = props.students.filter(student => student.id == props.match.params.id)[0]
  const student = useMemo(() => {
    return props.students.filter(student => student.id == props.match.params.id)[0]
  }, [props.students, props.match.params.id]);
  //let student = props.students[props.match.params.id-1];
  // let student=props.students[props.match.params.id-1];
 
  return (
    <div>
      <h1>
        {/* {student ? null: <Redirect to='/students'/>} */}
        {student ? student.name : null}

        <h6> {student ? student.number : null} - {student ? student.email : null}   </h6>
      </h1>
      <TeachersContainer student={student} />
    </div>
  )


}



export default Student