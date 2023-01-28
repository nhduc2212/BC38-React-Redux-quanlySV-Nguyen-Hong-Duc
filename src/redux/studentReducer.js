const initialState = {studentList:[]}


export const studentReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ("FETCH_STUDENTS"):
            state.studentList=payload;
    return {...state};
        default:
          return {...state}
      }
}
