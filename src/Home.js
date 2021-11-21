import React from 'react';
//import {Student} from '.../components/students';
//import Students from './containers/StudentsContainer';
//import Students from '../components/Students'

//'../actions/deleteTeacher';

/**
 * stateless / presentational /
 */
const Home = () => {

  // return (
  //   <div>
  //     {props.students.map(student =>
  //       <li key={student.id}>
  //         {/* <Link to={`/students/${student.id}`}>{student.name} - {student.number}- {student.email}</Link> */}
  //         {/* - <Button onClick={() => handleDelete(student)}>Delete</Button> - <Link to={`/students/${student.id}/edit`}>Edit</Link> &nbsp; <span><Like/></span><br /> */}
  //       </li>)}<br/>
  //   </div>
  // )
    return (



      
      <div>
        <h1>Click on Students to see a list of Students or <br/>


            Click on New Student to add a Student </h1>

            <h3> List of Students</h3>


      </div>
    );
}

// const Home = () => {

  // const handleDelete = (student) => {
  //   props.deleteStudent(student.id)
  // }


//   return (
//     <div>
//       {props.students.map(student =>
//         <li key={student.id}>
//           <Link to={`/students/${student.id}`}>{student.name} - {student.number}- {student.email}</Link>
//           - <Button onClick={() => handleDelete(student)}>Delete</Button> - <Link to={`/students/${student.id}/edit`}>Edit</Link> &nbsp; <span><Like/></span><br />
//         </li>)}<br/>
//     </div>
//   )
// }

 
//}



export default Home;
