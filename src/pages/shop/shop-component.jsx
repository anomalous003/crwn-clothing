import React from 'react'
import CollectionOverview from '../../components/collection-overview/collection-overview-component'
import CollectionPage from '../collection page/collection-page-component'

import { Route } from 'react-router-dom'

export const ShopPage = ({match}) => {
  return (
    <div className='shop-page'>
      <Route exact path={match.path} component={CollectionOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage