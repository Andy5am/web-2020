import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted } from './auth';
import { watchSayHappyBirthday } from './happyBirthday';

import {watchPetOwnerFetchingStarted,watchPetOwnerCreation,watchPetOwnerDestruction} from './petOwner';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchSayHappyBirthday),
    fork(watchPetOwnerCreation),
    fork(watchPetOwnerDestruction),
    fork(watchPetOwnerFetchingStarted),
  ]);
}


export default mainSaga;
