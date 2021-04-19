import CollectionOverview from './collection-overview-component'
import WithSpinner from '../with-spinner/with-spinner-component'


import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectFetching } from '../../redux/shop/shop-selectors'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading: selectFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer