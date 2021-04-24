import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
  yield delay(2000);
  yield put({ type: "AGE_UP_ASYNC", value: 2 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}