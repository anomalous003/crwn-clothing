import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview-component'

export class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        return (
            <div className='shop-page'>
                {
                    this.state.collections.map(({ id, ...otherCollectionsProps }) => {
                        return (
                            <CollectionPreview key={id} {...otherCollectionsProps}/>
                        )
                    })
                }                
            </div>
        )
    }
}

export default ShopPage
