import React from 'react'
const PopUp=({onConfirm, onCancel})=> {
  return (
    <div className='popup-div'>
        <h2>Do You Really Want To Delete?</h2>
        <button className='btn' onClick={onConfirm}>Yes</button>
        <button className='btn' onClick={onCancel}>No</button>
    </div>
  )
}

export default PopUp