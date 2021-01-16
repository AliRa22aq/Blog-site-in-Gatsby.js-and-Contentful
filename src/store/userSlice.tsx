import {createSlice , configureStore} from "@reduxjs/toolkit";



const userSlice = createSlice({
    name : "user",
    initialState : {name: "", picture:''},
    reducers : {
        addUser : (state , action)=> {
            return {
                ...state,
                name : action.payload.name,
                picture : action.payload.picture,
            }
        }
    }

  

})

const store = configureStore({
    reducer : userSlice.reducer
})


export const {addUser} = userSlice.actions
export default store