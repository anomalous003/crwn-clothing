import './directory.styles.scss'
import MenuItem from '../menu-item/menu-items-component'
import selectDirectorySection from '../../redux/directory/directory-selectors'

import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

export const Directory = ({sections}) => {
  return (
    <div className='directory-menu'>
      {
        sections.map(({ id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />)
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})


export default connect(mapStateToProps)(Directory)