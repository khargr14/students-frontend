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
        .then(jsonResponse => {
            /**
             * if the response http status code starts with either 4 or 5
             * that means that the api has failed to give a valid response
             * we detect that here, and if that is infact the case,
             * we dispatch an action with type 'ERROR' and payload with an object
             * which has a property called 'error' whose value is the response that
             * we got from the api.addTeacher
             */
            const requestEndedInAnError
                = jsonResponse?.status?.toString()?.startsWith('4')
                    || jsonResponse?.status?.toString()?.startsWith('5')

            if (requestEndedInAnError) {
                dispatch({
                    type: 'ERROR',
                    payload: {
                        error: jsonResponse,
                    }
                })

                return;
            }

            dispatch({ // now that data has been stored in the db, we need to update it in the browser as well
                type:'ADD_STUDENT',
                payload: jsonResponse // this is the student data ( name, email,  that has been saved in the database
            })
        })
        // if the fetch fails 
        .catch((error) => {
            dispatch({
                type: 'ERROR',
                payload: {
                    error,
                    whichApiFailed: '/api/v1/students' ,
                }
            })
        })
     }
    }