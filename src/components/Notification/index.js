// Write your code here

import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-main-container">
      <div className="sub-container">{children}</div>
      <GrFormClose className="cross" />
    </div>
  )
}
export default Notification
