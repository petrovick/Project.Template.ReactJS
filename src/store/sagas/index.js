import { all, takeLatest } from 'redux-saga/effects';

import { signIn, init } from './auth';
import { AuthTypes } from '../ducks/auth';

export default function* rootSaga() {
  return yield all([
    init(),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  ]);
}
