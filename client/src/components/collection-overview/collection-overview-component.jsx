import React from 'react'
import './collections-overview.styles.scss'

import CollectionPreview from '../collection-preview/collection-preview-component'
import {selectCollectionPreview} from '../../redux/shop/shop-selectors'

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {
        collections.map(({ id, ...otherCollectionsProps }) => {
          return (
            <CollectionPreview key={id} {...otherCollectionsProps} />
          )
        })
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreview
})

export default connect(mapStateToProps)(CollectionOverview)

