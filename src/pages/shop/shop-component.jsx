import React, { useEffect } from 'react'

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'
import CollectionPageContainer from '../collection page/container'

import { fetchCollectionsStart } from '../../redux/shop/shop-actions'

import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

const ShopPage = ({ fetchCollections, match }) => {

  useEffect(() => {
    fetchCollections()   
  }, [fetchCollections])

  return (
    <div className='shop-page'>
      <Route exact path={match.path} component={CollectionOverviewContainer}/>
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)