import React, { useEffect, lazy, Suspense } from 'react'

import { fetchCollectionsStart } from '../../redux/shop/shop-actions'

import { Route, useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'

import Spinner from '../../components/spinner/spinner'

const CollectionOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview.container')) 
const CollectionPageContainer = lazy(() => import('../collection page/container')) 

const ShopPage = ({ fetchCollections }) => {
  const match = useRouteMatch();
  
  useEffect(() => {
    fetchCollections()   
  }, [fetchCollections])

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route exact path={match.path} component={CollectionOverviewContainer}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </Suspense>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)