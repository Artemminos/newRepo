import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users: [],
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        deleteUserFromState: (state, action) => {
            const id = action.payload;
            state.users = state.users.filter(elem => elem.id !== id)
        },
        changeUser: (state, action) => {
            const index = state.users.findIndex(user=>user.id===action.payload.id)

        },

    },
})

export const {setUsers, deleteUserFromState, changeUser} = userSlice.actions

export default userSlice.reducer