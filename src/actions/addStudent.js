export const addStudent = (data) => {
   
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/students',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            },
            method: 'POST',
            body: JSON.stringify(data),
        })

        .then(resp => resp.json())
        .then(student => dispatch({ // now that data has been stored in the db, we need to update it in the browser as well
            type:'ADD_STUDENT',
            payload: student // this is the student data ( name, email, industry, ...) that has been saved in the database
        }))
     }
    }