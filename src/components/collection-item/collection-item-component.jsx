import "./collection-item.styles.scss";
import CustomButton from '../custom-button/custom-button-component'
import addItemToCart from '../../redux/cart/add-item-action'

import { connect } from 'react-redux'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div
                className = 'image'
                style = {{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton className='inverted' onClick={() => addItem(item)}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem)
