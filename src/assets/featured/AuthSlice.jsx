import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FatchRegister = createAsyncThunk("auth/login",
  async (registerData, { rejectevalue }) => {
    try {
      const response = await axios.post("https://671929a77fc4c5ff8f4cadf8.mockapi.io/api/login", registerData)
      // add dummy api
      console.log("register23")
      return response.data
    }
    catch (error) {
      rejectevalue(error.response.data);
    }
  }
)

export const FetchLogin = createAsyncThunk("auth/register",
  async (logindata, { loginvalue }) => {
    try {
      const response = await axios.post("https://671929a77fc4c5ff8f4cadf8.mockapi.io/api/login", logindata)
      return response.data
    }
    catch (error) {
      loginvalue(error.response.data);
    }
  }
)

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    isError: false,
    errorMessage: '',
    isRegistered: false,

  },
  reducers: {
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(FatchRegister.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(FatchRegister.fulfilled, (state) => {
        state.isLoading = false;
        state.isRegistered = true;
      })
      .addCase(FatchRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })


      //for login users

      .addCase(FetchLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(FetchLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(FetchLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
  }
})

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;