import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const existsUser = yield select(state => state.users.data.find(user => user.id === data.id));

    if (existsUser) {
      yield put(UserActions.addUserFailure('User already registered.'));
    } else if (data.name) {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        url: data.avatar_url,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
      yield put(UserActions.addUserSuccess(userData, 'User added successfully.'));
    } else {
      yield put(UserActions.addUserFailure('User does not exist.'));
    }
  } catch (error) {
    yield put(UserActions.addUserFailure('Error adding user.'));
  }
}
