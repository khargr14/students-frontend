export const deleteStudent = (studentId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/students/${studentId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(() => {
        dispatch({type: 'DELETE_STUDENT', payload: studentId})
      }).catch(err => {
          console.log('an error occured==>>', err)
      });
    }
  }