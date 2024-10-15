import React from 'react'
import "../CSS/Errortext.css"

function Errortext({ value }) {
    return (
        <div>
            <span className='errortext'>{value}</span>
        </div>
    )
}

export default Errortext
