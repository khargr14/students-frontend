export const addTeacher = (teacher, studentId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/students/${studentId}/teachers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...teacher, date: new Date(teacher.date)})
      })
      .then(response => response.json())
      .then(student => {
          if (student.error) {
            alert(student.error)
          } else {
            dispatch({type: 'ADD_TEACHER', payload: student})
          }
        }
      )
      .catch((error) => {
        dispatch({
            type: 'ERROR',
            payload: {
              error,
              whichApiFailed: `/api/v1/students/${studentId}/teachers`,
            }
        })
    })
    }
  }