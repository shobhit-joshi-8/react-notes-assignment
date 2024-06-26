import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  users: [{
    id: 121212,
    firstname: 'dummyUser',
    lastname: 'lastname',
    email: 'dummyuser@gmail.com',
    number: '7856548512',
    password: 'Asdf@123'
  }],
  currentUser: null,
  dialogState: {
    UpdateUserDialog: false,
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      state.currentUser = action.payload;
      toast.success('Login Successfull!')
    },
    logout: (state) => {
      state.currentUser = null;
    },
    handleUpdateUser: (state, action) => {
      const { firstname, lastname } = action.payload;
      state.currentUser.firstname = firstname;
      state.currentUser.lastname = lastname;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
      toast.success('Profile Updated Successfully!')

    },
    handleUpdateUserDialog: (state, action) => {
      state.dialogState.UpdateUserDialog = action.payload;
    },
  },
});

export const { register, login, logout, handleUpdateUser, UpdateUserDialog, handleUpdateUserDialog } = userSlice.actions;
export default userSlice.reducer;