export const deleteTeacher = (teacherId, studentId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/students/${studentId}/teachers/${teacherId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(() => dispatch({type: 'DELETE_TEACHER', payload: {teacherId, studentId}}))
    }
  }