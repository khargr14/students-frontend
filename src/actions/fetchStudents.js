export function fetchStudents() {
    return (dispatch) => {
      console.log("c")
     fetch('http://localhost:3000/api/v1/students')
     .then(resp => resp.json())
     .then(students => {  
       console.log("d")
       dispatch ({
       
       type:'FETCH_STUDENTS',
         payload: students
     })})
   }
 }
 
 