import { Action } from '@reduxjs/toolkit'
import { fork, call, put, takeLatest } from 'redux-saga/effects'
import { fetchUsers, fetchUsersSuccess, fetchUsersError } from './users'
import { Api } from '../api'

function* doFetchUser(action: Action) {
  try {
    // yield delay(2000);
    const users = yield call(Api.fetchUsers)
    yield put(fetchUsersSuccess(users))
  } catch (e) {
    yield put(fetchUsersError(e))
  }
}

function* watchUsers() {
  yield takeLatest(fetchUsers.type, doFetchUser)
}

export default function* root() {
  yield fork(watchUsers)
}
