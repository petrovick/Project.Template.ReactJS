import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';
import AuthActions from '../ducks/auth';

export function* init() {
  // yield localStorage.clear();
}

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });
    console.tron.log(response);
    localStorage.setItem('@oficina5:token', response.data.Token);

    yield put(AuthActions.signInSuccess(response.data.Token));
    yield put(push('/'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail/senha',
      })
    );
  }
}
