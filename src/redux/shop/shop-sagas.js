import actionTypes from './shop-action-types'

import {
  fetchCollectionsSuccess,
  fetchCollectionsError
} from './shop-actions'

import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils'

function* fetchCollectionStartAsync() {
  const collectionRef = firestore.collection('collections')

  try {
    const snapshot = yield collectionRef.get()
    const collectionMap = yield call(
      convertCollectionSnapshotToMap,
      snapshot
    )
    yield put(fetchCollectionsSuccess(collectionMap))
  } catch (error) {
    yield put(fetchCollectionsError(error.message))
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(
    actionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionStartAsync
  )
}

function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ])
}

export default shopSagas