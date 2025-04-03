import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = 'http://localhost:5000'

export const signUp = createAsyncThunk(
  'global/createUser',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users`)

      const findedUser = data.find(
        (item) =>
          item.email === userData.email && item.password === userData.password
      )
      if (findedUser) {
        throw new Error('Пользователь уже существует')
      }

      const resp = await axios.post(`${BASE_URL}/users`, userData)
      return resp.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const signIn = createAsyncThunk(
  'global/signIn',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users`)
      const findedUser = data.find(
        (item) =>
          item.email === userData.email && item.password === userData.password
      )

      if (!findedUser) {
        throw new Error('Пользователь не найден')
      }

      const fakeToken = `fake-jwt-token-${findedUser.id}` 
      return { token: fakeToken, user: findedUser } 
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
