import { takeLatest, put, all } from "redux-saga/effects";

function* ageUpAsync() {
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

function* ageDownAsync() {
  yield put({ type: "AGE_DOWN_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}

export function* watchAgeDown() {
  yield takeLatest("AGE_DOWN", ageDownAsync);
}

export function* rootSaga() {
  yield all([watchAgeUp(), watchAgeDown()]);
}
