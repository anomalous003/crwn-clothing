import actionTypes from './shop-action-types'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
  type: actionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collection => ({
  type: actionTypes.FETCH_COLLECTIONS_START_ASYNC,
  payload: collection
});

export const fetchCollectionsError = errorMessage => ({
  type: actionTypes.FETCH_COLLECTIONS_ERROR,
  payload: errorMessage
})

const fetchCollectionsAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections')
    
    dispatch(fetchCollectionsStart())
    collectionRef.get()
      .then(async snapshot => {
        const collection = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collection))
      })
      .catch(error => dispatch(fetchCollectionsError(error.message)))
  }
}

export default fetchCollectionsAsync