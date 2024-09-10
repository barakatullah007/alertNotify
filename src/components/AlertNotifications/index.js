// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderSuccess = () => (
    <Notification>
      <AiFillCheckCircle className="success image" />
      <div className="message-container">
        <h1 className="success message-heading">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderError = () => (
    <Notification>
      <RiErrorWarningFill className="error image" />
      <div className="message-container">
        <h1 className="error message-heading">Error</h1>
        <p className="description">
          Sorry you are not authorized have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarning = () => (
    <Notification>
      <MdWarning className="warning image" />
      <div className="message-container">
        <h1 className="warning message-heading">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfo = () => (
    <Notification>
      <MdInfo className="info image" />
      <div className="message-container">
        <h1 className="info message-heading">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="main-container">
      <h1>Alert Notifications</h1>
      {renderSuccess()}
      {renderError()}
      {renderWarning()}
      {renderInfo()}
    </div>
  )
}

export default AlertNotifications
