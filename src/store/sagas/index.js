import { all, takeLatest } from 'redux-saga/effects';
import { Types as UserTypes } from '../ducks/users';
import { addUser } from './users';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.ADD_REQUEST, addUser)]);
}

/**
 * takeLatest => só pega a ultima requisição do user
 * takeEvery => pega todas as requisições do user
 */
