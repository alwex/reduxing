import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NormalizedObjects, FetchableNormalizeObject } from '../types/default'
import { HasId } from '../types/default'

// Type
export interface User extends HasId {
  id: string
  email: string
}

// Reducers
const initialState: FetchableNormalizeObject<User> = {
  isFetching: false,
  byId: {},
  allIds: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers(state, action: PayloadAction<void>) {
      state.isFetching = true

      return state
    },
    fetchUsersSuccess(state, action: PayloadAction<NormalizedObjects<User>>) {
      state.byId = action.payload.byId
      state.allIds = action.payload.allIds
      state.isFetching = false

      return state
    },
    fetchUsersError(state, action: PayloadAction<Error>) {
      state.isFetching = false

      return state
    },
  },
})

const { actions, reducer } = usersSlice
export const { fetchUsers, fetchUsersSuccess, fetchUsersError } = actions
export default reducer
