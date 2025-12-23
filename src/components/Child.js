import React from 'react'

const Child = ({onclick, show}) => {
  return (
    <div className='child'>
        <h2>Child Component</h2>
        <button onClick={onclick}>Show Modal</button>
        {show && (
            <div>
                <h3>Modal Content</h3>
                <p>This is the modal content.</p>
            </div>
        )}
    </div>
  )
}

export default Child