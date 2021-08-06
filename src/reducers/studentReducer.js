export default function studentReducer(state = { students: [] }, action) {

    switch (action.type) {
      case 'FETCH_STUDENTS':
        return { students: action.payload }
      case 'ADD_STUDENT': {
        return { ...state, students: [...state.students, action.payload] };
      }
      case 'EDIT_STUDENT': {
        return {
           ...state,
           students: state.students.map(student => {
            if(student.id!==action.payload.id) return student;
            return action.payload;
          })
        };
      }
  
      case "DELETE_STUDENT": {
        const newStudents = state.students.filter(student => student.id !== action.payload)
        return { ...state, students: newStudents }
      }   
  
      case 'ADD_TEACHER': {
        const students = state.students.map(student => {
          if (student.id === action.payload.id) {
            return action.payload
          } else {
            return student
          }
        });
        return { ...state, students: students };
      }
  
      case "DELETE_TEACHER": {
        const {teacherId, studentId} = action.payload;
        const foundStudent = state.students.find(student => student.id === studentId);
        foundStudent.teachers = foundStudent.teachers.filter(teacher => teacher.id !== teacherId);
        //const newStudents = state.students.filter(student => student.id !== action.payload)
        return { ...state, students: [...state.students] }
      }     
  
      default:
        return state    
    }
  }