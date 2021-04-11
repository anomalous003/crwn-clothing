import React, { Component } from 'react'

import CollectionOverview from '../../components/collection-overview/collection-overview-component'
import CollectionPage from '../collection page/collection-page-component'
import updateCollections from '../../redux/shop/shop-actions' 
import WithSpinner from '../../components/with-spinner/with-spinner-component'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

const CollectionOverviewSpinner = WithSpinner(CollectionOverview)
const CollectionPageSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  state = {
    loading: true
  }
  
  unsubscribe = null

  componentDidMount() {
    const collectionRef = firestore.collection('collections')

    const { dispatchCollection } = this.props
  
    collectionRef.onSnapshot(async snapshot => {
      console.log(snapshot);
      const collection = convertCollectionSnapshotToMap(snapshot);
      dispatchCollection(collection)
      this.setState({loading:false})
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state
    
    return (
      <div className='shop-page'>
        <Route exact path={match.path} render={props => <CollectionOverviewSpinner isLoading={loading} {...props}/>} />
        <Route exact path={`${match.path}/:collectionId`} render={props => <CollectionPageSpinner isLoading={loading} {...props} />} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchCollection: collection => dispatch(updateCollections(collection))
})

export default connect(null, mapDispatchToProps)(ShopPage)