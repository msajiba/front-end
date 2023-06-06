import React from 'react'

const AlertBox = ({text,type}) => {
  return (
    <div className={`alert alert-rounded alert-${type}`}>
    <i className="fa fa-exclamation-circle" style={{ color: "#ef8495" }} />
    <span>
      <strong>{text}</strong> 
    </span>
  </div>
  )
}

export default AlertBox